
 async function runMigrations() {

    const fs = await import('fs');
    const path = await import('path');
    const mysql = await import('mysql2/promise');
     const dotenv = await import('dotenv');
    dotenv.default.config();

    // Validate required environment variables
    const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_NAME'];
    for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
            throw new Error(`Missing required environment variable: ${envVar}`);
        }
    }

    // Create database connection
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        multipleStatements: true // Allow multiple SQL statements in one query
    });

    try {
        // Read migrations directory
        const migrationsDir = path.join(".", 'migrations');
        const migrationFiles = fs.readdirSync(migrationsDir)
            .filter(file => file.endsWith('.sql'))
            .sort(); // Sort alphabetically to ensure proper order

        if (migrationFiles.length === 0) {
            console.log('No migration files found in the migrations folder.');
            return;
        }

        // Create migrations table if it doesn't exist
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS migrations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                filename VARCHAR(255) NOT NULL,
                executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Get already executed migrations
        const [executedMigrations] = await connection.execute('SELECT filename FROM migrations');

        const executedFilenames = new Set(executedMigrations.map(m => m.filename));

        for (const filename of migrationFiles) {
            if (executedFilenames.has(filename)) {
                console.log(`Skipping already executed migration: ${filename}`);
                continue;
            }

            const filePath = path.join(migrationsDir, filename);
            const sql = fs.readFileSync(filePath, 'utf8');

            console.log(`Executing migration: ${filename}`);

            try {
                await connection.beginTransaction();
                await connection.query(sql);

                // Record the migration
                await connection.execute(
                    'INSERT INTO migrations (filename) VALUES (?)',
                    [filename]
                );

                await connection.commit();
                console.log(`Successfully executed: ${filename}`);
            } catch (err) {
                await connection.rollback();
                console.error(`Error executing migration ${filename}:`, err.message);
                throw err; // Stop further migrations on error
            }
        }
    } finally {
        await connection.end();
    }
}

runMigrations()
    .then(() => console.log('Migrations completed successfully'))
    .catch(err => console.error('Migration failed:', err));

module.exports = runMigrations;
