'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminAuthGuard from '@/components/AdminAuthGuard';

interface Location {
    id: number;
    title: string;
    pickup_lat: number;
    pickup_lng: number;
    pickup_radius: number;
    dropoff_lat: number;
    dropoff_lng: number;
    dropoff_radius: number;
    fixed_fare: number | null;
    minimum_fare: number | null;
    is_active: boolean;
    created_at: string;
}

export default function AdminLocationsListPage() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        try {
            const response = await fetch('/api/admin/locations/list', {cache:'no-store'});
            const data = await response.json();
            setLocations(data.locations || []);
        } catch (error) {
            console.error('Error fetching locations:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <AdminAuthGuard>
                <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
                </div>
            </AdminAuthGuard>
        );
    }

    return (
        <AdminAuthGuard>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                            Locations List
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            View and manage existing location configurations ({locations.length})
                        </p>
                    </div>
                    <button
                        onClick={() => router.push('/admin/locations/new')}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                    >
                        Add New Location
                    </button>
                </div>

                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow">
                    {locations.length === 0 ? (
                        <div className="p-8 text-center text-neutral-600 dark:text-neutral-400">
                            No locations configured yet.
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-200 dark:divide-neutral-700">
                            {locations.map((location) => (
                                <div
                                    key={location.id}
                                    className="p-6 hover:bg-gray-50 dark:hover:bg-neutral-700 cursor-pointer transition-colors"
                                    onClick={() => router.push(`/admin/locations/${location.id}`)}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                                                {location.title}
                                            </h3>
                                            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                                                <p>Pickup: {Number(location.pickup_lat).toFixed(4)}, {Number(location.pickup_lng).toFixed(4)} (Radius: {location.pickup_radius}m)</p>
                                                <p>Dropoff: {Number(location.dropoff_lat).toFixed(4)}, {Number(location.dropoff_lng).toFixed(4)} (Radius: {location.dropoff_radius}m)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                location.is_active
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                            }`}>
                                                {location.is_active ? 'Active' : 'Inactive'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AdminAuthGuard>
    );
}