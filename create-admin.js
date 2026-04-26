// Load environment variables from .env file
require('dotenv').config();

const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'rosie_taxi',
  port: process.env.DB_PORT || 3306
};

async function createAdminUser() {
  const connection = await mysql.createConnection(dbConfig);
  
  try {
    // Admin user details
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    
    // Hash the password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(adminPassword, saltRounds);
    
    // Check if admin user already exists
    const [existingUsers] = await connection.execute(
      'SELECT id FROM users WHERE email = ? OR username = ?',
      [adminEmail, adminUsername]
    );
    
    if (existingUsers.length > 0) {
      console.log('❌ Admin user already exists with this email or username.');
      return;
    }
    
    // Insert admin user
    const [result] = await connection.execute(
      `INSERT INTO users (
        username, email, password_hash, first_name, last_name,
        role, is_active, is_verified
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        adminUsername,
        adminEmail,
        passwordHash,
        'Admin',
        'User',
        'admin',
        true,
        true
      ]
    );
    
    console.log('✅ Admin user created successfully!');
    console.log(`📧 Email: ${adminEmail}`);
    console.log(`🔑 Password: ${adminPassword}`);
    console.log(`👤 Username: ${adminUsername}`);
    console.log(`🆔 User ID: ${result.insertId}`);
    console.log('\n🚀 You can now login to the admin panel at /admin/login');
    
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
  } finally {
    await connection.end();
  }
}

// Run the script
createAdminUser();
