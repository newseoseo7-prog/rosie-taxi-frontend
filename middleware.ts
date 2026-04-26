import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for admin routes (excluding login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const adminAccessToken = request.cookies.get('admin_access_token');

    // If no access token, redirect to admin login
    if (!adminAccessToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Check if already logged in admin tries to access login page
  if (pathname === '/admin/login') {
    const adminAccessToken = request.cookies.get('admin_access_token');
    
    if (adminAccessToken) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*'
  ]
};
