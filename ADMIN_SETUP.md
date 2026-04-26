# Admin Login System Setup

This document explains how to set up and use the admin login system for the Rosie Taxi Next.js application.

## Features

- **Secure Authentication**: JWT-based token authentication with HTTP-only cookies
- **Role-based Access**: Only users with 'admin' role can access admin panel
- **Session Management**: Access tokens (1 hour) and refresh tokens (7 days)
- **Protected Routes**: Middleware automatically protects all `/admin/*` routes
- **Auto-redirect**: Automatically redirects to login if not authenticated

## Setup Instructions

### 1. Create Admin User

Run the provided script to create your first admin user:

```bash
# Run the script (it will automatically read from .env files)
node create-admin.js
```

The script will read environment variables from your `.env` or `.env.local` files. You can set these variables in your `.env.local` file:

```env
ADMIN_EMAIL="your-admin@example.com"
ADMIN_PASSWORD="your-secure-password"
ADMIN_USERNAME="admin"
```

If you don't set these environment variables, the script will use these defaults:
- Email: `admin@example.com`
- Password: `admin123`
- Username: `admin`

### 2. Database Requirements

Ensure your database has the required tables by running the migrations:

```bash
# Run database migrations
node migrations/01_users.sql
node migrations/02_login_tokens.sql
```

### 3. Environment Variables

Make sure these environment variables are set in your `.env.local`:

```env
# Database configuration
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=rosie_taxi
DB_PORT=3306

# Security
NODE_ENV=production  # Set to 'production' for secure cookies
```

## Usage

### Accessing Admin Panel

1. Navigate to `/admin/login`
2. Enter your admin credentials
3. You'll be redirected to the admin dashboard at `/admin`

### Admin Routes

- `/admin` - Dashboard with overview
- `/admin/login` - Login page
- `/admin/locations` - Location management
- `/admin/users` - User management (placeholder)
- `/admin/bookings` - Booking management (placeholder)

### API Endpoints

- `POST /api/admin/login` - Authenticate admin user
- `POST /api/admin/logout` - Logout and clear session
- `GET /api/admin/me` - Get current admin user info
- `POST /api/admin/refresh` - Refresh access token

## Security Features

1. **HTTP-only Cookies**: Tokens stored in HTTP-only cookies to prevent XSS
2. **Token Expiration**: Short-lived access tokens with refresh capability
3. **Role Verification**: Each request verifies admin role
4. **Secure Cookies**: Cookies marked as secure in production
5. **CSRF Protection**: SameSite cookie attribute for CSRF protection

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.tsx          # Admin layout with auth context
│   │   ├── page.tsx            # Admin dashboard
│   │   ├── login/
│   │   │   └── page.tsx        # Login page
│   │   └── locations/
│   │       ├── page.tsx        # Locations management
│   │       └── LocationRadiusPicker.tsx
│   └── api/
│       └── admin/
│           ├── login/route.ts   # Login endpoint
│           ├── logout/route.ts  # Logout endpoint
│           ├── me/route.ts      # Get user info
│           └── refresh/route.ts # Refresh token
├── db/
│   ├── users.ts                # User repository
│   └── loginToken.ts           # Token repository
└── middleware.ts               # Route protection
```

## Troubleshooting

### Common Issues

1. **Login fails with "Invalid credentials"**
   - Check if admin user exists in database
   - Verify password is correct
   - Ensure user has 'admin' role

2. **Redirected to login immediately after successful login**
   - Check database connection
   - Verify token creation is working
   - Check cookie settings

3. **Admin routes not protected**
   - Ensure `middleware.ts` is in root directory
   - Check middleware configuration

### Manual User Creation

If the script doesn't work, you can manually create an admin user:

```sql
INSERT INTO users (
  username, email, password_hash, first_name, last_name,
  role, is_active, is_verified
) VALUES (
  'admin',
  'admin@example.com',
  '$2b$10$...',  -- Use bcrypt to hash password
  'Admin',
  'User',
  'admin',
  1,
  1
);
```

## Development vs Production

### Development
- Cookies work over HTTP
- Less strict security settings
- Detailed error messages

### Production
- Cookies require HTTPS
- Secure cookie flags enabled
- Generic error messages

Make sure to set `NODE_ENV=production` in production environments.
