'use client'
import { GoogleMapsProvider } from "@/components/GoogleMapsProvider";
import AdminAuthGuard from '@/components/AdminAuthGuard';
import LocationRadiusPicker from "../LocationRadiusPicker";

export default function AdminNewLocationPage() {
    return (
        <AdminAuthGuard>
            <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    Create New Location
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                    Configure pickup and dropoff areas with radius settings
                </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow">
                <GoogleMapsProvider>
                    <LocationRadiusPicker />
                </GoogleMapsProvider>
            </div>
            </div>
        </AdminAuthGuard>
    );
}