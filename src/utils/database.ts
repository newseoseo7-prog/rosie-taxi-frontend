// src/utils/database.ts
import { Pool, PoolOptions, createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Database configuration interface
export interface DatabaseConfig extends PoolOptions {
    host: string;
    user: string;
    password: string;
    database: string;
    port?: number;
    waitForConnections?: boolean;
    connectionLimit?: number;
    queueLimit?: number;
}

// Default configuration
const DEFAULT_CONFIG: DatabaseConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'myapp',
    port: parseInt(process.env.DB_PORT || '3306'),
    waitForConnections: true,
    connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || '10'),
    queueLimit: parseInt(process.env.DB_QUEUE_LIMIT || '0'),
    // Enable keep-alive
    enableKeepAlive: true,
    keepAliveInitialDelay: parseInt(process.env.DB_KEEP_ALIVE_DELAY || '10000'),
};

class Database {
    private static instance: Database;
    private pool: Pool;

    private constructor(config: DatabaseConfig) {
        this.pool = createPool(config);
        this.setupEventListeners();
    }

    /**
     * Get the singleton instance of the Database
     */
    public static getInstance(config?: DatabaseConfig): Database {
        if (!Database.instance) {
            Database.instance = new Database(config || DEFAULT_CONFIG);
        }
        return Database.instance;
    }

    /**
     * Get the connection pool
     */
    public getPool(): Pool {
        return this.pool;
    }

    /**
     * Close all connections in the pool
     */
    public async close(): Promise<void> {
        await this.pool.end();
        Database.instance = null as any;
    }

    /**
     * Setup event listeners for the pool
     */
    private setupEventListeners(): void {
        this.pool.on('connection', (connection) => {
         //   console.log('New database connection established');
        });

        this.pool.on('acquire', (connection) => {
         //   console.log('Connection %d acquired', connection.threadId);
        });

        this.pool.on('release', (connection) => {
        //    console.log('Connection %d released', connection.threadId);
        });

        this.pool.on('enqueue', () => {
            console.log('Waiting for available connection slot');
        });

        // @ts-ignore
        this.pool.on('error', (err) => {
            console.error('Database pool error:', err);
        });
    }

    /**
     * Execute a query with parameters
     */
    public async query(sql: string, values?: any[]): Promise<any> {
        const conn = await this.pool.getConnection();
        try {
            const [rows] = await conn.query(sql, values);
            return rows;
        } finally {
            conn.release();
        }
    }

    /**
     * Execute a transaction
     */
    public async transaction(callback: (connection: any) => Promise<void>): Promise<void> {
        const conn = await this.pool.getConnection();
        try {
            await conn.beginTransaction();
            await callback(conn);
            await conn.commit();
        } catch (err) {
            await conn.rollback();
            throw err;
        } finally {
            conn.release();
        }
    }
}

// Export a singleton instance
const database = Database.getInstance();
export default database;