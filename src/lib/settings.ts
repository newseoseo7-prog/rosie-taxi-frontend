import { SettingsRepository } from '@/db/settings';

const settingsRepo = new SettingsRepository();

export async function getSetting(key: string): Promise<string | null> {
    return await settingsRepo.getSetting(key);
}

export async function setSetting(key: string, value: string): Promise<void> {
    await settingsRepo.setSetting(key, value);
}

export async function getAllSettings(): Promise<{[key: string]: string}> {
    const settings = await settingsRepo.getAllSettings();
    const result: {[key: string]: string} = {};
    settings.forEach(setting => {
        result[setting.setting_key] = setting.setting_value || '';
    });
    return result;
}