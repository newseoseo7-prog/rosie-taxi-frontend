'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AdminAuthContext';
import AdminAuthGuard from '@/components/AdminAuthGuard';
import { BookingStatus } from '@/types/booking';
import BookingMap from '../BookingMap';

interface Booking {
  id: number;
  user_id: string;
  name: string;
  phone: string;
  pickup_address: string;
  drop_off_address: string;
  pickup_address_name?: string;
  drop_off_address_name?: string;
  fare_charges: number;
  discounted_fare?: number;
  booking_id: string;
  status: BookingStatus;
  payment_mode: string | null;
  payment_id: string | null;
  selected_time: string | null;
  selected_date: string | null;
  payment_time: string | null;
  distance: number | null;
  created_at: string;
  updated_at: string;
}

const STATUS_COLORS = {
  [BookingStatus.PENDING]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  [BookingStatus.CONFIRMED]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  [BookingStatus.COMPLETED]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  [BookingStatus.CANCELLED]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

export default function BookingDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const bookingId = params.id as string;

  useEffect(() => {
    if (bookingId) {
      fetchBooking();
    }
  }, [bookingId]);

  const fetchBooking = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        credentials: 'include',
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch booking details');
      }

      const data = await response.json();
      setBooking(data.booking);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch booking details');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateBookingStatus = async (newStatus: BookingStatus) => {
    if (!booking) return;

    try {
      const response = await fetch('/api/admin/bookings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          bookingId: booking.booking_id,
          status: newStatus
        })
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to update booking status');
      }

      setBooking(prev => prev ? { ...prev, status: newStatus } : null);
      
      const statusMessages = {
        [BookingStatus.CONFIRMED]: 'Booking has been confirmed successfully!',
        [BookingStatus.COMPLETED]: 'Booking has been marked as completed!',
        [BookingStatus.CANCELLED]: 'Booking has been cancelled successfully!',
        [BookingStatus.PENDING]: 'Booking has been set to pending!'
      };
      
      console.log(statusMessages[newStatus] || 'Booking status updated successfully!');
    } catch (err) {
      console.error('Error updating booking status:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to update booking status';
      alert(`Error: ${errorMessage}`);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  if (loading) {
    return (
      <AdminAuthGuard>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </AdminAuthGuard>
    );
  }

  if (error || !booking) {
    return (
      <AdminAuthGuard>
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {error || 'Booking not found'}
            </p>
            <button
              onClick={() => router.push('/admin/bookings')}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Back to Bookings
            </button>
          </div>
        </div>
      </AdminAuthGuard>
    );
  }

  return (
    <AdminAuthGuard>
      <>
        <title>Booking #{booking.id} | Admin</title>
        <div className="max-w-6xl mx-auto p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => router.push('/admin/bookings')}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-2 flex items-center"
              >
                ← Back to Bookings
              </button>
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Booking #{booking.id}
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                ID: {booking.booking_id}
              </p>
            </div>
            <span className={`px-4 py-2 text-sm font-semibold rounded-full ${STATUS_COLORS[booking.status]}`}>
              {booking.status}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Booking Details */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Booking Information
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Customer Name
                    </label>
                    <p className="text-neutral-900 dark:text-neutral-100">
                      {booking.name || 'Anonymous'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Phone
                    </label>
                    <p className="text-neutral-900 dark:text-neutral-100">
                      {booking.phone}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Route Details
                  </label>
                  <div className="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-md space-y-3">
                    <div>
                      <span className="text-green-600 dark:text-green-400 font-medium">Pickup:</span>
                      <p className="text-neutral-900 dark:text-neutral-100 mt-1">
                        {booking.pickup_address_name || booking.pickup_address}
                      </p>
                    </div>
                    <div>
                      <span className="text-red-600 dark:text-red-400 font-medium">Destination:</span>
                      <p className="text-neutral-900 dark:text-neutral-100 mt-1">
                        {booking.drop_off_address_name || booking.drop_off_address}
                      </p>
                    </div>
                    {booking.distance && (
                      <div>
                        <span className="text-neutral-600 dark:text-neutral-400 font-medium">Distance:</span>
                        <span className="text-neutral-900 dark:text-neutral-100 ml-2">
                          {Number(booking.distance).toFixed(1)} miles
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Fare
                    </label>
                    <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {formatCurrency(booking.fare_charges)}
                    </p>
                    {booking.discounted_fare && booking.discounted_fare !== booking.fare_charges && (
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Discounted: {formatCurrency(booking.discounted_fare)}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Payment
                    </label>
                    <p className="text-neutral-900 dark:text-neutral-100">
                      {booking.payment_mode || 'Not specified'}
                    </p>
                    {booking.payment_id && (
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        ID: {booking.payment_id}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Booking Date & Time
                    </label>
                    <p className="text-neutral-900 dark:text-neutral-100">
                      {booking.selected_date ? new Date(booking.selected_date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: '2-digit', 
                        year: 'numeric' 
                      }) : 'N/A'}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {booking.selected_time || 'No time specified'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Created
                    </label>
                    <p className="text-neutral-900 dark:text-neutral-100">
                      {formatDate(booking.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Route Map
              </h2>
              <BookingMap
                pickup={booking.pickup_address}
                dropoff={booking.drop_off_address}
                pickupName={booking.pickup_address_name}
                dropoffName={booking.drop_off_address_name}
              />
            </div>
          </div>

          {/* Status Update Actions */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Update Status
            </h2>
            {booking.status !== BookingStatus.COMPLETED ? (
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Change Status:
                </label>
                <select
                  value={booking.status}
                  onChange={(e) => {
                    const newStatus = e.target.value as BookingStatus;
                    if (newStatus !== booking.status) {
                      handleUpdateBookingStatus(newStatus);
                    }
                  }}
                  className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-blue-500"
                >
                  <option value={BookingStatus.PENDING}>Pending</option>
                  <option value={BookingStatus.CONFIRMED}>Confirmed</option>
                  <option value={BookingStatus.COMPLETED}>Completed</option>
                  <option value={BookingStatus.CANCELLED}>Cancelled</option>
                </select>
              </div>
            ) : (
              <p className="text-neutral-600 dark:text-neutral-400">
                This booking is completed and cannot be modified.
              </p>
            )}
          </div>
        </div>
      </>
    </AdminAuthGuard>
  );
}