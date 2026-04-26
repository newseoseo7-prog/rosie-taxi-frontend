'use client'
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminAuthGuard from '@/components/AdminAuthGuard';
import { GoogleMapsProvider } from '@/components/GoogleMapsProvider';
import LocationsMap from '../LocationsMap';

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

export default function LocationDetailPage() {
    const [location, setLocation] = useState<Location | null>(null);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState<Partial<Location>>({});
    const router = useRouter();
    const params = useParams();
    const locationId = params.id as string;

    useEffect(() => {
        if (locationId) {
            fetchLocation();
        }
    }, [locationId]);

    const fetchLocation = async () => {
        try {
            const response = await fetch(`/api/admin/locations/${locationId}`);
            const data = await response.json();
            if (data.location) {
                setLocation(data.location);
                setFormData(data.location);
            }
        } catch (error) {
            console.error('Error fetching location:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`/api/save-location-radius/${locationId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                await fetchLocation();
                setEditing(false);
            }
        } catch (error) {
            console.error('Error updating location:', error);
        }
    };

    const toggleActive = async () => {
        try {
            const response = await fetch(`/api/save-location-radius/${locationId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ is_active: !location?.is_active })
            });

            if (response.ok) {
                await fetchLocation();
            }
        } catch (error) {
            console.error('Error updating location:', error);
        }
    };

    const deleteLocation = async () => {
        if (!confirm(`Are you sure you want to delete "${location?.title}"?`)) {
            return;
        }

        try {
            const response = await fetch(`/api/save-location-radius/${locationId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                router.push('/admin/locations/list');
            }
        } catch (error) {
            console.error('Error deleting location:', error);
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

    if (!location) {
        return (
            <AdminAuthGuard>
                <div className="text-center py-8">
                    <p className="text-neutral-600 dark:text-neutral-400">Location not found</p>
                    <button
                        onClick={() => router.push('/admin/locations/list')}
                        className="mt-4 text-indigo-600 hover:text-indigo-800"
                    >
                        Back to Locations List
                    </button>
                </div>
            </AdminAuthGuard>
        );
    }

    return (
        <AdminAuthGuard>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <button
                            onClick={() => router.push('/admin/locations/list')}
                            className="text-indigo-600 hover:text-indigo-800 mb-2"
                        >
                            ← Back to Locations List
                        </button>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                            {location.title}
                        </h2>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={toggleActive}
                            className={`px-4 py-2 rounded-lg font-medium ${
                                location.is_active
                                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                    : 'bg-red-100 text-red-800 hover:bg-red-200'
                            }`}
                        >
                            {location.is_active ? 'Active' : 'Inactive'}
                        </button>
                        <button
                            onClick={() => setEditing(!editing)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            {editing ? 'Cancel' : 'Edit'}
                        </button>
                        <button
                            onClick={deleteLocation}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                        >
                            Delete
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold mb-4">Location Information</h3>
                        
                        {editing ? (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={formData.title || ''}
                                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                                        className="w-full p-2 border rounded-lg dark:bg-neutral-700 dark:border-neutral-600"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Fixed Fare</label>
                                        <input
                                            type="number"
                                            value={formData.fixed_fare || ''}
                                            onChange={(e) => setFormData({...formData, fixed_fare: parseFloat(e.target.value) || null})}
                                            className="w-full p-2 border rounded-lg dark:bg-neutral-700 dark:border-neutral-600"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Minimum Fare</label>
                                        <input
                                            type="number"
                                            value={formData.minimum_fare || ''}
                                            onChange={(e) => setFormData({...formData, minimum_fare: parseFloat(e.target.value) || null})}
                                            className="w-full p-2 border rounded-lg dark:bg-neutral-700 dark:border-neutral-600"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={handleSave}
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                >
                                    Save Changes
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-medium text-green-600 mb-2">Pickup Area</h4>
                                        <p className="text-sm">Lat: {location.pickup_lat}</p>
                                        <p className="text-sm">Lng: {location.pickup_lng}</p>
                                        <p className="text-sm">Radius: {location.pickup_radius}m</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-red-600 mb-2">Dropoff Area</h4>
                                        <p className="text-sm">Lat: {location.dropoff_lat}</p>
                                        <p className="text-sm">Lng: {location.dropoff_lng}</p>
                                        <p className="text-sm">Radius: {location.dropoff_radius}m</p>
                                    </div>
                                </div>
                                {(location.fixed_fare || location.minimum_fare) && (
                                    <div className="pt-4 border-t">
                                        <h4 className="font-medium mb-2">Pricing</h4>
                                        {location.fixed_fare && <p className="text-sm">Fixed Fare: ${location.fixed_fare}</p>}
                                        {location.minimum_fare && <p className="text-sm">Minimum Fare: ${location.minimum_fare}</p>}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold mb-4">Location Map</h3>
                        <div className="h-96">
                            <GoogleMapsProvider>
                                <LocationsMap locations={[location]} selectedLocationId={location.id} />
                            </GoogleMapsProvider>
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthGuard>
    );
}