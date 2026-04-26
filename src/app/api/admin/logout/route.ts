import { NextRequest, NextResponse } from 'next/server';
import { LoginTokenRepository } from '@/db/loginToken';
import { verifyAdminAuth } from '@/lib/adminAuth';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication (optional for logout, but good practice)
    const user = await verifyAdminAuth(request);
    
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('admin_access_token')?.value;
    const refreshToken = cookieStore.get('admin_refresh_token')?.value;

    const tokenRepo = new LoginTokenRepository();

    // Revoke tokens if they exist
    if (accessToken) {
      const token = await tokenRepo.findTokenByValue(accessToken);
      if (token) {
        await tokenRepo.revokeToken(token.id);
      }
    }

    if (refreshToken) {
      const token = await tokenRepo.findTokenByValue(refreshToken);
      if (token) {
        await tokenRepo.revokeToken(token.id);
      }
    }

    // Clear cookies
    cookieStore.set('admin_access_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/'
    });

    cookieStore.set('admin_refresh_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/'
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Admin logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
