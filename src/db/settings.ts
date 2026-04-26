import database from '../utils/database';

export interface Setting {
    id: number;
    setting_key: string;
    setting_value: string | null;
    created_at: Date;
    updated_at: Date;
}

export class SettingsRepository {
    async getSetting(key: string): Promise<string | null> {
        const query = 'SELECT setting_value FROM settings WHERE setting_key = ?';
        const rows = await database.query(query, [key]);
        return rows[0]?.setting_value || null;
    }

    async setSetting(key: string, value: string): Promise<void> {
        const query = `
            INSERT INTO settings (setting_key, setting_value) 
            VALUES (?, ?) 
            ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)
        `;
        await database.query(query, [key, value]);
    }

    async getAllSettings(): Promise<Setting[]> {
        const query = 'SELECT * FROM settings ORDER BY setting_key';
        return await database.query(query);
    }

    async deleteSetting(key: string): Promise<boolean> {
        const query = 'DELETE FROM settings WHERE setting_key = ?';
        const result = await database.query(query, [key]);
        return result.affectedRows > 0;
    }
}