'use client';

import { useAuth } from '@/contexts/AdminAuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface AdminAuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function AdminAuthGuard({ children, fallback }: AdminAuthGuardProps): JSX.Element {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      console.log("User",user)
      router.push('/admin/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-900 dark:border-neutral-100"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        {fallback || (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                Access Denied
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                Please log in to access this page.
              </p>
            </div>
          </div>
        )}
      </>
    );
  }

  return <>{children}</>;
}