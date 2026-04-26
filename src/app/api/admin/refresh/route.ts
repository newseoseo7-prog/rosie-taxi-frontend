import { NextRequest, NextResponse } from 'next/server';
import { UserRepository } from '@/db/users';
import { LoginTokenRepository, TokenType } from '@/db/loginToken';
import { verifyAdminAuth } from '@/lib/adminAuth';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    // First verify if user has valid admin auth (optional for refresh)
    const currentUser = await verifyAdminAuth(request);
    
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('admin_refresh_token')?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { error: 'No refresh token provided' },
        { status: 401 }
      );
    }

    const tokenRepo = new LoginTokenRepository();
    const userRepo = new UserRepository();

    // Verify refresh token
    const { isValid, token } = await tokenRepo.verifyToken(refreshToken);
    if (!isValid || !token || token.token_type !== TokenType.REFRESH) {
      return NextResponse.json(
        { error: 'Invalid or expired refresh token' },
        { status: 401 }
      );
    }

    // Get user
    const user = await userRepo.findUserById(token.user_id);
    if (!user || !user.is_active || user.role !== 'admin') {
      return NextResponse.json(
        { error: 'User not found, inactive, or not admin' },
        { status: 401 }
      );
    }

    // Create new access token (1 hour)
    const accessTokenExpiry = new Date(Date.now() + 60 * 60 * 1000);
    const accessToken = await tokenRepo.createToken({
      user_id: user.id,
      token_type: TokenType.ACCESS,
      expires_at: accessTokenExpiry,
      ip_address: request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for') || undefined,
      user_agent: request.headers.get('user-agent') || undefined
    });

    // Optionally rotate refresh token (create new one and revoke old)
    const refreshTokenExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const newRefreshToken = await tokenRepo.rotateRefreshToken(
      token.id,
      user.id,
      refreshTokenExpiry
    );

    // Set new cookies
    cookieStore.set('admin_access_token', accessToken.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60, // 1 hour
      path: '/'
    });

    cookieStore.set('admin_refresh_token', newRefreshToken.token, {
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
    console.error('Admin refresh error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
