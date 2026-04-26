
-- Create the login_tokens table
CREATE TABLE IF NOT EXISTS login_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    token_type ENUM('access', 'refresh', 'remember_me', 'api') NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    revoked BOOLEAN DEFAULT FALSE,
    ip_address VARCHAR(45),
    user_agent TEXT,
    device_info VARCHAR(255),

    -- Foreign key to users table
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,

    -- Indexes for better performance
    INDEX idx_login_tokens_token (token),
    INDEX idx_login_tokens_user_id (user_id),
    INDEX idx_login_tokens_expires_at (expires_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

