-- Create the settings table
CREATE TABLE IF NOT EXISTS settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(100) NOT NULL UNIQUE,
    setting_value TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create index for better performance
CREATE INDEX idx_settings_key ON settings(setting_key);

-- Insert default settings
INSERT INTO settings (setting_key, setting_value) VALUES
('PER_MILE_RATE', '2.50'),
('MIN_FARE', '15.00'),
('AUTO_APPROVE_BOOKING', 'false')
ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value);