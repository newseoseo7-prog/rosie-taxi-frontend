'use client';

import Link from 'next/link';
import AdminAuthGuard from '@/components/AdminAuthGuard';

export default function AdminLocationsPage() {
    return (
        <AdminAuthGuard>
            <div className="space-y-4 sm:space-y-6">
            <div>
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    Location Management
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                    Configure and manage pickup and dropoff areas
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <Link href="/admin/locations/new" className="block">
                    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-indigo-500">
                        <div className="text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                                Create New Location
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Set up new pickup and dropoff areas with custom radius and fare settings
                            </p>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/locations/list" className="block">
                    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-indigo-500">
                        <div className="text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                                Manage Locations
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                View, edit, and manage existing location configurations
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            </div>
        </AdminAuthGuard>
    );
}
