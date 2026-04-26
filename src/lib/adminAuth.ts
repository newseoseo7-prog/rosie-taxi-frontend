import { NextRequest } from 'next/server';
import { LoginTokenRepository } from '@/db/loginToken';
import { UserRepository } from '@/db/users';

export async function verifyAdminAuth(request: NextRequest) {
  const token = request.cookies.get('admin_access_token')?.value;
  
  if (!token) {
    console.log("No token in cookies")
    return null;
  }

  try {
    const tokenRepo = new LoginTokenRepository();
    const userRepo = new UserRepository();

    // Verify token
    const { isValid, token: tokenData } = await tokenRepo.verifyToken(token);
    if (!isValid || !tokenData) {
      return null;
    }

    // Get user
    const user = await userRepo.findUserById(tokenData.user_id);
    if (!user || !user.is_active || user.role !== 'admin') {
      console.log("User is not admin")
      return null;
    }
    
    return user;
  } catch (error) {
    return null;
  }
}