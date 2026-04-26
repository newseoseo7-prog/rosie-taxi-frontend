// const fs = require('fs');
// const path = require('path');
// const mysql = require('mysql2/promise');
// const runMigrations = require("./migrate");
// require('dotenv').config();

/**
 * Resets the database by truncating all its tables, and then running all migrations.
 */
async function resetDatabase() {
    const mysql = await import('mysql2/promise');
    const { default: runMigrations } = await import('./migrate.js');
    const dotenv = await import('dotenv');
    dotenv.config();


    // Validate required environment variables for database connection and operations
    const requiredEnvVars = ['DB_HOST', 'DB_USER',  'DB_NAME'];
    for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
            throw new Error(`Missing required environment variable: ${envVar}. Please ensure your .env file is correctly configured.`);
        }
    }

    let connection;
    try {
        // Establish a connection directly to the target database for truncation
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME, // Connect to the specific database
            multipleStatements: true // Allow multiple SQL statements in one query
        });

        console.log(`Attempting to truncate all tables in database: ${process.env.DB_NAME}`);

        // Temporarily disable foreign key checks to allow truncation of tables with foreign key constraints
        await connection.execute('SET FOREIGN_KEY_CHECKS = 0;');

        // Get all table names in the database
        // The query result is an array of objects, where each object has a single key
        // representing the table name (e.g., { 'Tables_in_your_db_name': 'users' })
        const [tables] = await connection.execute(`SHOW TABLES IN \`${process.env.DB_NAME}\`;`);
        // Extract table names from the result set
        const tableNames = tables.map(row => Object.values(row)[0]);

        if (tableNames.length === 0) {
            console.log(`No tables found in database '${process.env.DB_NAME}'.`);
        } else {
            console.log(`Found ${tableNames.length} tables to truncate.`);
            // Iterate over each table and execute TRUNCATE TABLE
            for (const tableName of tableNames) {
                console.log(`Truncating table: ${tableName}`);
                await connection.execute(`DROP TABLE \`${tableName}\`;`);
            }
            console.log('All tables truncated successfully.');
        }

    } catch (error) {
        console.error('Error during database truncation phase:', error.message);
        throw error; // Re-throw to stop execution
    } finally {
        // Re-enable foreign key checks regardless of success or failure
        if (connection) {
            await connection.execute('SET FOREIGN_KEY_CHECKS = 1;');
            await connection.end(); // Ensure the connection is closed
        }
    }

    // Now, run the migrations on the truncated database
    // This function is called separately and is defined below.
    await runMigrations();
}


// Execute the database reset process
resetDatabase()
    .then(() => console.log('Database reset (truncation) and migrations completed successfully!'))
    .catch(err => console.error('Database reset failed:', err));

