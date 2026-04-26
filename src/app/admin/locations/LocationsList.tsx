'use client'
import { useState, useEffect } from 'react';
import LocationsMap from './LocationsMap';
import { GoogleMapsProvider } from '@/components/GoogleMapsProvider';

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

interface LocationsListProps {
    refreshTrigger?: number;
}

export default function LocationsList({ refreshTrigger }: LocationsListProps) {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingLocation, setEditingLocation] = useState<Location | null>(null);
    const [selectedLocationId, setSelectedLocationId] = useState<number | undefined>();

    useEffect(() => {
        fetchLocations();
    }, [refreshTrigger]);

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

    const toggleActive = async (id: number, currentStatus: boolean) => {
        try {
            const response = await fetch(`/api/save-location-radius/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ is_active: !currentStatus })
            });

            if (response.ok) {
                fetchLocations();
            }
        } catch (error) {
            console.error('Error updating location:', error);
        }
    };

    const deleteLocation = async (id: number, title: string) => {
        if (!confirm(`Are you sure you want to delete "${title}"?`)) {
            return;
        }

        try {
            const response = await fetch(`/api/save-location-radius/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                fetchLocations();
            }
        } catch (error) {
            console.error('Error deleting location:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Existing Locations ({locations.length})
                </h3>
                {selectedLocationId && (
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                        Click a location to view route on map
                    </p>
                )}
            </div>
            
            {locations.length > 0 && (
                <GoogleMapsProvider>
                    <LocationsMap locations={locations} selectedLocationId={selectedLocationId} />
                </GoogleMapsProvider>
            )}
            
            {locations.length === 0 ? (
                <p className="text-neutral-600 dark:text-neutral-400">No locations configured yet.</p>
            ) : (
                <div className="grid gap-4">
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className={`bg-white dark:bg-neutral-700 rounded-lg border p-3 sm:p-4 cursor-pointer transition-colors ${
                                selectedLocationId === location.id
                                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                                    : 'border-gray-200 dark:border-neutral-600 hover:border-gray-300 dark:hover:border-neutral-500'
                            }`}
                            onClick={() => setSelectedLocationId(selectedLocationId === location.id ? undefined : location.id)}
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-3">
                                <h4 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
                                    {location.title}
                                </h4>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleActive(location.id, location.is_active);
                                        }}
                                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                                            location.is_active
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                        }`}
                                    >
                                        {location.is_active ? 'Active' : 'Inactive'}
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setEditingLocation(location);
                                        }}
                                        className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteLocation(location.id, location.title);
                                        }}
                                        className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                                <div>
                                    <h5 className="font-medium text-green-600 dark:text-green-400 mb-1">Pickup Area</h5>
                                    <p className="text-neutral-600 dark:text-neutral-400 break-all">
                                        Lat: {location.pickup_lat}, Lng: {location.pickup_lng}
                                    </p>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        Radius: {location.pickup_radius}m
                                    </p>
                                </div>
                                
                                <div>
                                    <h5 className="font-medium text-red-600 dark:text-red-400 mb-1">Dropoff Area</h5>
                                    <p className="text-neutral-600 dark:text-neutral-400 break-all">
                                        Lat: {location.dropoff_lat}, Lng: {location.dropoff_lng}
                                    </p>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        Radius: {location.dropoff_radius}m
                                    </p>
                                </div>
                            </div>
                            
                            {(location.fixed_fare || location.minimum_fare) && (
                                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-neutral-600">
                                    <h5 className="font-medium text-neutral-700 dark:text-neutral-300 mb-1 text-xs sm:text-sm">Fare Settings</h5>
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm">
                                        {location.fixed_fare && (
                                            <span className="text-neutral-600 dark:text-neutral-400">
                                                Fixed: ${location.fixed_fare}
                                            </span>
                                        )}
                                        {location.minimum_fare && (
                                            <span className="text-neutral-600 dark:text-neutral-400">
                                                Minimum: ${location.minimum_fare}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                            
                            <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                                Created: {new Date(location.created_at).toLocaleDateString()}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {editingLocation && (
                <EditLocationModal
                    location={editingLocation}
                    onClose={() => setEditingLocation(null)}
                    onSave={() => {
                        setEditingLocation(null);
                        fetchLocations();
                    }}
                />
            )}
        </div>
    );
}

function EditLocationModal({ location, onClose, onSave }: {
    location: Location;
    onClose: () => void;
    onSave: () => void;
}) {
    const [formData, setFormData] = useState({
        title: location.title,
        fixed_fare: location.fixed_fare?.toString() || '',
        minimum_fare: location.minimum_fare?.toString() || ''
    });
    const [saving, setSaving] = useState(false);

    const handleSave = async () => {
        setSaving(true);
        try {
            const response = await fetch(`/api/save-location-radius/${location.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: formData.title,
                    fixed_fare: formData.fixed_fare ? parseFloat(formData.fixed_fare) : null,
                    minimum_fare: formData.minimum_fare ? parseFloat(formData.minimum_fare) : null
                })
            });

            if (response.ok) {
                onSave();
            }
        } catch (error) {
            console.error('Error updating location:', error);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 w-full max-w-md">
                <h3 className="text-base sm:text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                    Edit Location
                </h3>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                            Title
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                            Fixed Fare
                        </label>
                        <input
                            type="number"
                            value={formData.fixed_fare}
                            onChange={(e) => setFormData(prev => ({ ...prev, fixed_fare: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                            step="0.01"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                            Minimum Fare
                        </label>
                        <input
                            type="number"
                            value={formData.minimum_fare}
                            onChange={(e) => setFormData(prev => ({ ...prev, minimum_fare: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                            step="0.01"
                        />
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 text-sm sm:text-base"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={saving || !formData.title.trim()}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md disabled:opacity-50 text-sm sm:text-base"
                    >
                        {saving ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    );
}