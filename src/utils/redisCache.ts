import { createClient, RedisClientType } from 'redis';

interface CacheOptions {
    url?: string;
    defaultTtl?: number;
    autoConnect?: boolean;
}

interface CacheStats {
    hits: number;
    misses: number;
    sets: number;
    deletes: number;
}
const redisUrl =process.env.REDIS_URL || 'redis://localhost:6379'

export class RedisCache {
    private client: RedisClientType;
    private defaultTtl: number;
    private stats: CacheStats;
    private isConnecting: boolean = false;

    constructor(options: CacheOptions = {}) {
        const {
            url = redisUrl,
            defaultTtl = 3600,
            autoConnect = true
        } = options;

        this.client = createClient({ url }) as RedisClientType;
        this.defaultTtl = defaultTtl;
        this.stats = {
            hits: 0,
            misses: 0,
            sets: 0,
            deletes: 0
        };

        this.client.on('error', (err: Error) => {
            console.error('Redis Client Error:', err);
        });

        this.client.on('connect', () => {
           // console.log('Redis Client Connected');
        });

        if (autoConnect) {
            this.connect().catch((error) => {
                console.error('Failed to auto-connect to Redis:', error);
            });
        }
    }

    private async connect(): Promise<void> {
        if (this.isConnecting || this.client.isOpen) {
            return;
        }

        this.isConnecting = true;
        try {
            await this.client.connect();
          //  console.log('Successfully connected to Redis');
        } catch (error) {
            console.error('Failed to connect to Redis:', error);
            throw error;
        } finally {
            this.isConnecting = false;
        }
    }

    private async ensureConnected(): Promise<void> {
        if (!this.client.isOpen && !this.isConnecting) {
            await this.connect();
        }
    }

    async set<T>(key: string, value: T, ttlSeconds: number = this.defaultTtl): Promise<boolean> {
        try {
            await this.ensureConnected();
            const serializedValue = JSON.stringify(value);

            if (ttlSeconds > 0) {
                await this.client.setEx(key, ttlSeconds, serializedValue);
            } else {
                await this.client.set(key, serializedValue);
            }

            this.stats.sets++;
            return true;
        } catch (error) {
            console.error('Error setting cache:', error);
            return false;
        }
    }

    async get<T>(key: string): Promise<T | null> {
        try {
            await this.ensureConnected();
            const value = await this.client.get(key);

            if (value) {
                this.stats.hits++;
                return JSON.parse(value) as T;
            } else {
                this.stats.misses++;
                return null;
            }
        } catch (error) {
            console.error('Error getting cache:', error);
            this.stats.misses++;
            return null;
        }
    }

    async getOrSet<T>(
        key: string,
        factory: () => Promise<T>,
        ttlSeconds: number = this.defaultTtl
    ): Promise<T> {
        const cached = await this.get<T>(key);

        if (cached !== null) {
            return cached;
        }

        const value = await factory();
        await this.set(key, value, ttlSeconds);
        return value;
    }

    async delete(key: string): Promise<boolean> {
        try {
            await this.ensureConnected();
            const result = await this.client.del(key);
            this.stats.deletes++;
            return result > 0;
        } catch (error) {
            console.error('Error deleting cache:', error);
            return false;
        }
    }

    async deleteByPattern(pattern: string): Promise<number> {
        try {
            await this.ensureConnected();
            const keys = await this.client.keys(pattern);

            if (keys.length > 0) {
                const result = await this.client.del(keys);
                this.stats.deletes += keys.length;
                return result;
            }

            return 0;
        } catch (error) {
            console.error('Error deleting by pattern:', error);
            return 0;
        }
    }

    async has(key: string): Promise<boolean> {
        try {
            await this.ensureConnected();
            const result = await this.client.exists(key);
            return result === 1;
        } catch (error) {
            console.error('Error checking key existence:', error);
            return false;
        }
    }

    async getTtl(key: string): Promise<number> {
        try {
            await this.ensureConnected();
            return await this.client.ttl(key);
        } catch (error) {
            console.error('Error getting TTL:', error);
            return -2;
        }
    }

    async clearAll(): Promise<boolean> {
        try {
            await this.ensureConnected();
            await this.client.flushAll();
            return true;
        } catch (error) {
            console.error('Error clearing cache:', error);
            return false;
        }
    }

    getStats(): CacheStats {
        return { ...this.stats };
    }

    resetStats(): void {
        this.stats = {
            hits: 0,
            misses: 0,
            sets: 0,
            deletes: 0
        };
    }

    async disconnect(): Promise<void> {
        try {
            if (this.client.isOpen) {
                await this.client.quit();
                console.log('Redis connection closed');
            }
        } catch (error) {
            console.error('Error closing Redis connection:', error);
        }
    }

    isConnected(): boolean {
        return this.client.isOpen;
    }
}