-- Add email field to bookings table
ALTER TABLE bookings ADD COLUMN email VARCHAR(255) NULL AFTER phone;

-- Create index for email field for better query performance
CREATE INDEX idx_bookings_email ON bookings(email);
