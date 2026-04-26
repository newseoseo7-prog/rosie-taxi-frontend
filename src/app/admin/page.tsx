'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AdminAuthContext';
import AdminAuthGuard from '@/components/AdminAuthGuard';

interface Statistics {
  users: {
    total: number;
    byRole: { [key: string]: number };
    activeUsers: number;
  };
  bookings: {
    total: number;
    completed: number;
    pending: number;
    completionRate: number;
    byStatus: { [key: string]: number };
    recent: any[];
  };
  revenue: {
    total: number;
    currency: string;
  };
  locations: {
    active: number;
  };
}

export default function AdminDashboard() {
  const { user } = useAuth();
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Fetching Stats")
    const fetchStatistics = async () => {
      try {
        const response = await fetch('/api/admin/statistics',{cache: 'no-store'});
        if (!response.ok) {
          console.log("Faile dto ")
          throw new Error('Failed to fetch statistics');
        }
        const data = await response.json();
        setStatistics(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load statistics');
      } finally {
        setLoading(false);
      }
    };


    fetchStatistics().then(r => {});
  }, []);

  return (
    <AdminAuthGuard>
      <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Dashboard
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          Welcome to the admin panel, {user?.first_name || user?.username}
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
              <div className="animate-pulse">
                <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded mb-2"></div>
                <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                Error loading statistics
              </h3>
              <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      ) : statistics ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Total Users
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {statistics.users.total.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {statistics.users.activeUsers} active
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Total Bookings
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
              {statistics.bookings.total.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {statistics.bookings.completionRate}% completion rate
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Total Revenue
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              ${Number(statistics.revenue.total).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {statistics.revenue.currency}
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Pending Bookings
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
              {statistics.bookings.pending.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Awaiting confirmation
            </p>
          </div>
        </div>
      ) : null}

      {statistics && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Recent Bookings */}
          <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
              Recent Bookings
            </h3>
            {statistics.bookings.recent.length > 0 ? (
              <div className="space-y-3">
                {statistics.bookings.recent.map((booking: any) => (
                  <div key={booking.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-700 rounded-md space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {booking.name || 'Anonymous'}
                      </p>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                        {booking.pickup_address_name} → {booking.drop_off_address_name}
                      </p>
                    </div>
                    <div className="flex items-center justify-between sm:flex-col sm:items-end sm:text-right">
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        ${Number(booking.fare_charges).toFixed(2)}
                      </p>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        booking.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : booking.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-neutral-600 dark:text-neutral-400">No recent bookings</p>
            )}
          </div>

          {/* Booking Status Breakdown */}
          <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
              Booking Status Breakdown
            </h3>
            <div className="space-y-3">
              {Object.entries(statistics.bookings.byStatus).map(([status, count]) => (
                <div key={status} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      status === 'completed' 
                        ? 'bg-green-500'
                        : status === 'pending'
                        ? 'bg-yellow-500'
                        : status === 'confirmed'
                        ? 'bg-blue-500'
                        : 'bg-red-500'
                    }`}></div>
                    <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 capitalize">
                      {status}
                    </span>
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {count as number} ({statistics.bookings.total > 0 ? Math.round(((count as number) / statistics.bookings.total) * 100) : 0}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
        <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/admin/locations"
            className="block p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <h4 className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100">
              Manage Locations
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Configure service areas and pricing
            </p>
          </a>

          <a
            href="/admin/users"
            className="block p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <h4 className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100">
              User Management
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              View and manage user accounts
            </p>
          </a>

          <a
            href="/admin/bookings"
            className="block p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100">
              View Bookings
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Monitor and manage reservations
            </p>
          </a>
        </div>
      </div>
      </div>
    </AdminAuthGuard>
  );
}
