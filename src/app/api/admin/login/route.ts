import { NextRequest, NextResponse } from 'next/server';
import { UserRepository, UserRole } from '@/db/users';
import { LoginTokenRepository, TokenType } from '@/db/loginToken';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const userRepo = new UserRepository();
    const tokenRepo = new LoginTokenRepository();

    // Find user by email
    let user = await userRepo.findUserByEmail(email);
    
    if (!user) {
      // Check if credentials match env variables
      const adminEmail = process.env.ADMIN_EMAIL;
      const adminPassword = process.env.ADMIN_PASSWORD;
      
      console.log('Admin env check:', { adminEmail, hasPassword: !!adminPassword });
      
      if (adminEmail && adminPassword && email === adminEmail && password === adminPassword) {
        // Create admin user in database
        try {
          user = await userRepo.createUser({
            username: 'admin',
            email: adminEmail,
            password: adminPassword,
            first_name: 'Admin',
            last_name: 'User',
            role: UserRole.ADMIN
          });
          
          // Mark as verified and active
          await userRepo.markUserVerified(user.id);
          await userRepo.setUserActiveStatus(user.id, true);
        } catch (createError) {
          console.error('Error creating admin user:', createError);
          return NextResponse.json(
            { error: 'Failed to create admin user' },
            { status: 500 }
          );
        }
      } else {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }
    }

    // Check if user is admin
    if (user.role !== UserRole.ADMIN) {
      return NextResponse.json(
        { error: 'Access denied. Admin privileges required.' },
        { status: 403 }
      );
    }

    // Check if user is active
    if (!user.is_active) {
      return NextResponse.json(
        { error: 'Account is deactivated' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await userRepo.verifyPassword(user, password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login
    await userRepo.updateLastLogin(user.id);

    // Create access token (1 hour)
    const accessTokenExpiry = new Date(Date.now() + 60 * 60 * 1000);

    const accessToken = await tokenRepo.createToken({
      user_id: user.id,
      token_type: TokenType.ACCESS,
      expires_at: accessTokenExpiry,
      ip_address: request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for') || undefined,
      user_agent: request.headers.get('user-agent') || undefined
    });

    // Create refresh token (7 days)
    const refreshTokenExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const refreshToken = await tokenRepo.createToken({
      user_id: user.id,
      token_type: TokenType.REFRESH,
      expires_at: refreshTokenExpiry,
      ip_address: request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for') || undefined,
      user_agent: request.headers.get('user-agent') || undefined
    });

    // Set HTTP-only cookies
    const cookieStore =await cookies();
    cookieStore.set('admin_access_token', accessToken.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60, // 1 hour
      path: '/'
    });

    cookieStore.set('admin_refresh_token', refreshToken.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/'
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
