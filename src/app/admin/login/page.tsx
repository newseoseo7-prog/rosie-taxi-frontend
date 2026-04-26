'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/shared/Input';
import ButtonPrimary from '@/shared/ButtonPrimary';
import Link from 'next/link';
import { useAuth } from "@/contexts/AdminAuthContext";

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login, user } = useAuth();

  // Redirect if already logged in
  React.useEffect(() => {
    if (user) {
      router.push('/admin');
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const success = await login(email, password);

      if (success) {
        console.log("Login successful");
        // The AuthContext will automatically update the user state
        // and the useEffect above will handle the redirect
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Show nothing while checking auth or if already logged in (will redirect)
  if (user) {
    return null;
  }

  return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
              Admin Login
            </h2>
            <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Sign in to access the admin panel
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Email address
                </label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Password
                </label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-1"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
                <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
                  <div className="text-sm text-red-700 dark:text-red-400">
                    {error}
                  </div>
                </div>
            )}

            <div>
              <ButtonPrimary
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </ButtonPrimary>
            </div>

            <div className="text-center">
              <Link
                  href="/"
                  className="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400"
              >
                ← Back to website
              </Link>
            </div>
          </form>
        </div>
      </div>
  );
}