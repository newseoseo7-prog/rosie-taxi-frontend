'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AuthProvider, useAuth } from '@/contexts/AdminAuthContext';

function AdminNavbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { user, logout } = useAuth();

  return (
    <nav className="admin-navbar bg-white dark:bg-neutral-800 shadow-lg border-b-2 border-neutral-200 dark:border-neutral-700 fixed top-0 left-0 right-0 z-[60]">
      <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center min-w-0 flex-1">
            <button
              onClick={onToggleSidebar}
              className="admin-mobile-menu-btn lg:hidden p-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 mr-2 flex-shrink-0 bg-neutral-50 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-900 dark:text-neutral-100 truncate">
              Admin Panel
            </h1>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 flex-shrink-0">
            {user && (
              <>
                <span className="hidden md:block text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-32 truncate">
                  {user.first_name || user.username}
                </span>
                <button
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex-shrink-0"
                >
                  <span className="hidden sm:inline">Logout</span>
                  <span className="sm:hidden">Exit</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function AdminSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z' },
    { href: '/admin/locations', label: 'Locations', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
    { href: '/admin/users', label: 'Users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
    { href: '/admin/bookings', label: 'Bookings', icon: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { href: '/admin/settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`admin-sidebar
        fixed lg:static inset-y-0 left-0 z-50 w-72 sm:w-80 lg:w-64 bg-white dark:bg-neutral-800 shadow-xl lg:shadow-sm border-r-2 border-neutral-200 dark:border-neutral-700 min-h-screen
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-3 sm:p-4 lg:p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between lg:hidden mb-4 sm:mb-6 pb-3 border-b border-neutral-200 dark:border-neutral-700">
            <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 bg-neutral-50 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="admin-sidebar-nav space-y-1 sm:space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => onClose()}
                  className={`flex items-center px-3 sm:px-4 py-3 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 border-l-4 border-blue-500 shadow-sm'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  );
}

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Check if current path is login page
  const isLoginPage = pathname === '/admin/login';

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-900 dark:border-neutral-100"></div>
      </div>
    );
  }

  // If user is not authenticated or it's the login page, don't show the admin layout
  if (!user || isLoginPage) {
    return <>{children}</>;
  }

  return (
    <>
      <title>Admin Panel</title>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <AdminNavbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex pt-14 sm:pt-16">
          <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-0">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
