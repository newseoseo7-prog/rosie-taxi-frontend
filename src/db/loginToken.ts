import crypto from 'crypto';
import database from '../utils/database'; // Adjust the import path as needed

// ==================== TYPE DEFINITIONS ====================

export enum TokenType {
    ACCESS = 'access',
    REFRESH = 'refresh',
    REMEMBER_ME = 'remember_me',
    API = 'api'
}

export interface LoginToken {
    id: number;
    user_id: number;
    token: string;
    token_type: TokenType;
    expires_at: Date;
    created_at: Date;
    revoked: boolean;
    ip_address: string | null;
    user_agent: string | null;
    device_info: string | null;
}

export interface CreateTokenInput {
    user_id: number;
    token_type: TokenType;
    expires_at: Date;
    ip_address?: string;
    user_agent?: string;
    device_info?: string;
}

export interface TokenQueryOptions {
    includeRevoked?: boolean;
    onlyExpired?: boolean;
    onlyActive?: boolean;
    tokenType?: TokenType;
}

// ==================== LOGIN TOKEN REPOSITORY ====================

export class LoginTokenRepository {
    constructor() {} // No pool needed in constructor

    // =============== CRUD OPERATIONS ===============

    async createToken(input: CreateTokenInput): Promise<LoginToken> {
        const token = crypto.randomBytes(32).toString('hex');

        const query = `
            INSERT INTO login_tokens (
                user_id, token, token_type, expires_at, ip_address, user_agent, device_info
            ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            input.user_id,
            token,
            input.token_type,
            input.expires_at,
            input.ip_address || null,
            input.user_agent || null,
            input.device_info || null
        ];

        const result = await database.query(query, values);
        let t = await this.findTokenById(result.insertId);
        if (!t) throw new Error('Token not found');
        return t;
    }

    async findTokenById(id: number): Promise<LoginToken | null> {
        const query = 'SELECT * FROM login_tokens WHERE id = ?';
        const rows = await database.query(query, [id]);
        return rows[0] || null;
    }

    async findTokenByValue(token: string): Promise<LoginToken | null> {
        const query = 'SELECT * FROM login_tokens WHERE token = ?';
        const rows = await database.query(query, [token]);
        return rows[0] || null;
    }

    async revokeToken(id: number): Promise<boolean> {
        const query = 'UPDATE login_tokens SET revoked = TRUE WHERE id = ?';
        const result = await database.query(query, [id]);
        return result.affectedRows > 0;
    }

    async revokeAllTokensForUser(userId: number, tokenType?: TokenType): Promise<number> {
        let query = 'UPDATE login_tokens SET revoked = TRUE WHERE user_id = ?';
        const values: any[] = [userId];

        if (tokenType) {
            query += ' AND token_type = ?';
            values.push(tokenType);
        }

        const result = await database.query(query, values);
        return result.affectedRows;
    }

    async deleteToken(id: number): Promise<boolean> {
        const query = 'DELETE FROM login_tokens WHERE id = ?';
        const result = await database.query(query, [id]);
        return result.affectedRows > 0;
    }

    async deleteExpiredTokens(): Promise<number> {
        const query = 'DELETE FROM login_tokens WHERE expires_at < NOW()';
        const result = await database.query(query);
        return result.affectedRows;
    }

    // =============== VERIFICATION OPERATIONS ===============

    async verifyToken(token: string): Promise<{ isValid: boolean; token: LoginToken | null }> {
        const foundToken = await this.findTokenByValue(token);

        if (!foundToken) {
            return { isValid: false, token: null };
        }

        const isExpired = new Date(foundToken.expires_at) < new Date();
        const isValid = !foundToken.revoked && !isExpired;

        return { isValid, token: isValid ? foundToken : null };
    }

    // =============== QUERY OPERATIONS ===============

    async findTokensForUser(userId: number, options: TokenQueryOptions = {}): Promise<LoginToken[]> {
        const whereClauses = ['user_id = ?'];
        const values: any[] = [userId];

        if (!options.includeRevoked) {
            whereClauses.push('revoked = FALSE');
        }

        if (options.onlyExpired) {
            whereClauses.push('expires_at < NOW()');
        } else if (options.onlyActive) {
            whereClauses.push('expires_at >= NOW()');
        }

        if (options.tokenType) {
            whereClauses.push('token_type = ?');
            values.push(options.tokenType);
        }

        const query = `
            SELECT * FROM login_tokens
            WHERE ${whereClauses.join(' AND ')}
            ORDER BY created_at DESC
        `;

        const rows = await database.query(query, values);
        return rows as LoginToken[];
    }

    async findValidRefreshToken(userId: number, token: string): Promise<LoginToken | null> {
        const query = `
            SELECT * FROM login_tokens
            WHERE user_id = ?
              AND token = ?
              AND token_type = 'refresh'
              AND revoked = FALSE
              AND expires_at >= NOW()
            LIMIT 1
        `;

        const rows = await database.query(query, [userId, token]);
        return rows[0] || null;
    }

    // =============== UTILITY OPERATIONS ===============

    async rotateRefreshToken(oldTokenId: number, userId: number, newExpiry: Date): Promise<LoginToken> {
        await database.transaction(async (connection) => {
            // Revoke the old token
            await connection.query('UPDATE login_tokens SET revoked = TRUE WHERE id = ?', [oldTokenId]);

            // Create a new refresh token
            const token = crypto.randomBytes(32).toString('hex');
            const insertQuery = `
        INSERT INTO login_tokens (
          user_id, token, token_type, expires_at
        ) VALUES (?, ?, ?, ?)
      `;

            await connection.query(insertQuery, [userId, token, TokenType.REFRESH, newExpiry]);
        });

        // Return the newest refresh token for this user
        const tokens = await this.findTokensForUser(userId, {
            tokenType: TokenType.REFRESH,
            onlyActive: true
        });

        if (tokens.length === 0) {
            throw new Error('Failed to create new refresh token');
        }

        return tokens[0];
    }

    // =============== TRANSACTION OPERATIONS ===============

    async createTokenWithTransaction(input: CreateTokenInput): Promise<LoginToken> {
        let token: LoginToken;

        await database.transaction(async (connection) => {
            const tokenValue = crypto.randomBytes(32).toString('hex');

            const query = `
        INSERT INTO login_tokens (
          user_id, token, token_type, expires_at, ip_address, user_agent, device_info
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

            const values = [
                input.user_id,
                tokenValue,
                input.token_type,
                input.expires_at,
                input.ip_address || null,
                input.user_agent || null,
                input.device_info || null
            ];

            const result = await connection.query(query, values);

            // Get the newly created token
            const [rows] = await connection.query('SELECT * FROM login_tokens WHERE id = ?', [result.insertId]);
            token = rows[0];
        });

        return token!;
    }
}