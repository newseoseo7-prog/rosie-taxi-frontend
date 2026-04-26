import bcrypt from 'bcrypt';
import database from '../utils/database'; // Adjust the import path as needed

// ==================== TYPE DEFINITIONS ====================

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
    MODERATOR = 'moderator'
}

export interface User {
    id: number;
    username: string;
    email: string;
    password_hash: string;
    first_name: string | null;
    last_name: string | null;
    phone_number: string | null;
    is_active: boolean;
    is_verified: boolean;
    created_at: Date;
    updated_at: Date;
    last_login_at: Date | null;
    profile_picture: string | null;
    bio: string | null;
    role: UserRole;
}

export interface CreateUserInput {
    username: string;
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    profile_picture?: string;
    bio?: string;
    role?: UserRole;
}

export interface UpdateUserInput {
    username?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string | null;
    is_active?: boolean;
    is_verified?: boolean;
    profile_picture?: string | null;
    bio?: string | null;
    role?: UserRole;
}

export interface UserQueryOptions {
    includeInactive?: boolean;
    includeUnverified?: boolean;
    role?: UserRole;
    limit?: number;
    offset?: number;
    searchTerm?: string;
}

// ==================== USER REPOSITORY ====================

export class UserRepository {
    constructor() {} // No pool needed in constructor

    // =============== CRUD OPERATIONS ===============

    async createUser(userData: CreateUserInput): Promise<User> {
        const hashedPassword = await this.hashPassword(userData.password);

        const query = `
      INSERT INTO users (
        username, email, password_hash, first_name, last_name,
        phone_number, profile_picture, bio, role
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

        const values = [
            userData.username,
            userData.email.toLowerCase(),
            hashedPassword,
            userData.first_name || null,
            userData.last_name || null,
            userData.phone_number || null,
            userData.profile_picture || null,
            userData.bio || null,
            userData.role || UserRole.USER
        ];

        const result = await database.query(query, values);
        const user = await this.findUserById(result.insertId);
        if (!user) throw new Error('User not found');
        return user;
    }

    async findUserById(id: number): Promise<User | null> {
        const query = 'SELECT * FROM users WHERE id = ?';
        const rows = await database.query(query, [id]);
        return rows[0] || null;
    }

    async findUserByEmail(email: string): Promise<User | null> {
        const query = 'SELECT * FROM users WHERE email = ?';
        const rows = await database.query(query, [email.toLowerCase()]);
        return rows[0] || null;
    }

    async findUserByUsername(username: string): Promise<User | null> {
        const query = 'SELECT * FROM users WHERE username = ?';
        const rows = await database.query(query, [username]);
        return rows[0] || null;
    }

    async updateUser(id: number, updateData: UpdateUserInput): Promise<User> {
        const fieldsToUpdate = [];
        const values = [];

        if (updateData.username !== undefined) {
            fieldsToUpdate.push('username = ?');
            values.push(updateData.username);
        }

        if (updateData.email !== undefined) {
            fieldsToUpdate.push('email = ?');
            values.push(updateData.email.toLowerCase());
        }

        if (updateData.first_name !== undefined) {
            fieldsToUpdate.push('first_name = ?');
            values.push(updateData.first_name);
        }

        if (updateData.last_name !== undefined) {
            fieldsToUpdate.push('last_name = ?');
            values.push(updateData.last_name);
        }

        if (updateData.phone_number !== undefined) {
            fieldsToUpdate.push('phone_number = ?');
            values.push(updateData.phone_number);
        }

        if (updateData.is_active !== undefined) {
            fieldsToUpdate.push('is_active = ?');
            values.push(updateData.is_active);
        }

        if (updateData.is_verified !== undefined) {
            fieldsToUpdate.push('is_verified = ?');
            values.push(updateData.is_verified);
        }

        if (updateData.profile_picture !== undefined) {
            fieldsToUpdate.push('profile_picture = ?');
            values.push(updateData.profile_picture);
        }

        if (updateData.bio !== undefined) {
            fieldsToUpdate.push('bio = ?');
            values.push(updateData.bio);
        }

        if (updateData.role !== undefined) {
            fieldsToUpdate.push('role = ?');
            values.push(updateData.role);
        }

        if (fieldsToUpdate.length === 0) {
            throw new Error('No valid fields provided for update');
        }

        fieldsToUpdate.push('updated_at = CURRENT_TIMESTAMP');
        values.push(id);

        const query = `
      UPDATE users 
      SET ${fieldsToUpdate.join(', ')} 
      WHERE id = ?
    `;

        await database.query(query, values);
        const user = await this.findUserById(id);
        if (!user) throw new Error('User not found');
        return user;
    }

    async deleteUser(id: number): Promise<boolean> {
        const query = 'DELETE FROM users WHERE id = ?';
        const result = await database.query(query, [id]);
        return result.affectedRows > 0;
    }

    // =============== SPECIALIZED OPERATIONS ===============

    async markUserVerified(id: number): Promise<User> {
        return this.updateUser(id, { is_verified: true });
    }

    async setUserActiveStatus(id: number, isActive: boolean): Promise<User> {
        return this.updateUser(id, { is_active: isActive });
    }

    async updateLastLogin(id: number): Promise<void> {
        const query = 'UPDATE users SET last_login_at = CURRENT_TIMESTAMP WHERE id = ?';
        await database.query(query, [id]);
    }

    async changePassword(id: number, newPassword: string): Promise<void> {
        const hashedPassword = await this.hashPassword(newPassword);
        const query = 'UPDATE users SET password_hash = ? WHERE id = ?';
        await database.query(query, [hashedPassword, id]);
    }

    // =============== LIST/QUERY OPERATIONS ===============

    async listUsers(options: UserQueryOptions = {}): Promise<User[]> {
        const whereClauses = ['1 = 1'];
        const values = [];

        if (!options.includeInactive) {
            whereClauses.push('is_active = TRUE');
        }

        if (!options.includeUnverified) {
            whereClauses.push('is_verified = TRUE');
        }

        if (options.role) {
            whereClauses.push('role = ?');
            values.push(options.role);
        }

        if (options.searchTerm) {
            whereClauses.push(`
        (username LIKE ? OR 
         email LIKE ? OR 
         CONCAT(first_name, ' ', last_name) LIKE ?)
      `);
            const searchTerm = `%${options.searchTerm}%`;
            values.push(searchTerm, searchTerm, searchTerm);
        }

        const limit = options.limit ? `LIMIT ${options.limit}` : '';
        const offset = options.offset ? `OFFSET ${options.offset}` : '';

        const query = `
      SELECT * FROM users 
      WHERE ${whereClauses.join(' AND ')} 
      ORDER BY created_at DESC 
      ${limit} ${offset}
    `;

        const rows = await database.query(query, values);
        return rows as User[];
    }

    async countUsers(options: Omit<UserQueryOptions, 'limit' | 'offset'> = {}): Promise<number> {
        const whereClauses = ['1 = 1'];
        const values = [];

        if (!options.includeInactive) {
            whereClauses.push('is_active = TRUE');
        }

        if (!options.includeUnverified) {
            whereClauses.push('is_verified = TRUE');
        }

        if (options.role) {
            whereClauses.push('role = ?');
            values.push(options.role);
        }

        if (options.searchTerm) {
            whereClauses.push(`
        (username LIKE ? OR 
         email LIKE ? OR 
         CONCAT(first_name, ' ', last_name) LIKE ?)
      `);
            const searchTerm = `%${options.searchTerm}%`;
            values.push(searchTerm, searchTerm, searchTerm);
        }

        const query = `
      SELECT COUNT(*) as count FROM users 
      WHERE ${whereClauses.join(' AND ')}
    `;

        const result = await database.query(query, values);
        return result[0].count;
    }

    // =============== AUTHENTICATION HELPERS ===============

    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

    async verifyPassword(user: User, password: string): Promise<boolean> {
        return bcrypt.compare(password, user.password_hash);
    }

    async usernameExists(username: string): Promise<boolean> {
        const query = 'SELECT 1 FROM users WHERE username = ? LIMIT 1';
        const rows = await database.query(query, [username]);
        return rows.length > 0;
    }

    async emailExists(email: string): Promise<boolean> {
        const query = 'SELECT 1 FROM users WHERE email = ? LIMIT 1';
        const rows = await database.query(query, [email.toLowerCase()]);
        return rows.length > 0;
    }

    // =============== STATISTICS OPERATIONS ===============

    async getUsersByRole(): Promise<{ [key: string]: number }> {
        const query = `
      SELECT role, COUNT(*) as count 
      FROM users 
      WHERE is_active = TRUE 
      GROUP BY role
    `;
        
        const rows = await database.query(query);
        const result: { [key: string]: number } = {};
        
        rows.forEach((row: any) => {
            result[row.role] = row.count;
        });
        
        return result;
    }

    async getActiveUsersCount(): Promise<number> {
        const query = 'SELECT COUNT(*) as count FROM users WHERE is_active = TRUE';
        const result = await database.query(query);
        return result[0].count;
    }

    async getRecentUsers(limit: number = 10): Promise<User[]> {
        const query = `
      SELECT * FROM users 
      WHERE is_active = TRUE 
      ORDER BY created_at DESC 
      LIMIT ?
    `;
        
        const rows = await database.query(query, [limit]);
        return rows as User[];
    }

    async getUsersRegisteredToday(): Promise<number> {
        const query = `
      SELECT COUNT(*) as count 
      FROM users 
      WHERE DATE(created_at) = CURDATE() 
      AND is_active = TRUE
    `;
        
        const result = await database.query(query);
        return result[0].count;
    }

    async getUsersRegisteredThisWeek(): Promise<number> {
        const query = `
      SELECT COUNT(*) as count 
      FROM users 
      WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY) 
      AND is_active = TRUE
    `;
        
        const result = await database.query(query);
        return result[0].count;
    }

    async getUsersRegisteredThisMonth(): Promise<number> {
        const query = `
      SELECT COUNT(*) as count 
      FROM users 
      WHERE MONTH(created_at) = MONTH(NOW()) 
      AND YEAR(created_at) = YEAR(NOW()) 
      AND is_active = TRUE
    `;
        
        const result = await database.query(query);
        return result[0].count;
    }

    // =============== TRANSACTION OPERATIONS ===============

    async createUserWithTransaction(userData: CreateUserInput): Promise<User> {
        let user: User;

        await database.transaction(async (connection) => {
            const hashedPassword = await this.hashPassword(userData.password);

            const query = `
        INSERT INTO users (
          username, email, password_hash, first_name, last_name,
          phone_number, profile_picture, bio, role
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

            const values = [
                userData.username,
                userData.email.toLowerCase(),
                hashedPassword,
                userData.first_name || null,
                userData.last_name || null,
                userData.phone_number || null,
                userData.profile_picture || null,
                userData.bio || null,
                userData.role || UserRole.USER
            ];

            const result = await connection.query(query, values);

            // Get the newly created user
            const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
            user = rows[0];
        });

        return user!;
    }
}