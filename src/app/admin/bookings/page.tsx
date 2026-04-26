'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AdminAuthContext';
import AdminAuthGuard from '@/components/AdminAuthGuard';
import { BookingStatus } from '@/types/booking';


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

interface BookingResponse {
  bookings: Booking[];
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

const STATUS_COLORS = {
  [BookingStatus.PENDING]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  [BookingStatus.CONFIRMED]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  [BookingStatus.COMPLETED]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  [BookingStatus.CANCELLED]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

export default function AdminBookingsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  // Filter and pagination states
  const [filters, setFilters] = useState({
    status: 'all',
    search: '',
    page: 1,
    limit: 10,
    sortBy: 'created_at',
    sortOrder: 'DESC' as 'ASC' | 'DESC',
    startDate: '',
    endDate: ''
  });
  
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalCount: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false
  });

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== '' && value !== 'all') {
          params.append(key, value.toString());
        }
      });

      const response = await fetch(`/api/admin/bookings?${params.toString()}`, {
        credentials: 'include',
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      const data: BookingResponse = await response.json();
      setBookings(data.bookings);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const handleFilterChange = (key: string, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: key !== 'page' ? 1 : Number(value) // Reset to page 1 when changing filters, ensure page is always a number
    }));
  };

  const handleUpdateBookingStatus = async (bookingId: string, newStatus: BookingStatus) => {
    try {
      // Show loading state
      const loadingMessage = `Updating booking status to ${newStatus.toLowerCase()}...`;
      console.log(loadingMessage);

      const response = await fetch('/api/admin/bookings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          bookingId,
          status: newStatus
        })
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to update booking status');
      }

      // Refresh bookings
      await fetchBookings();
      
      // Update selected booking if it's open
      if (selectedBooking && selectedBooking.booking_id === bookingId) {
        setSelectedBooking(prev => prev ? { ...prev, status: newStatus } : null);
      }
      
      // Show success message with specific status
      const statusMessages = {
        [BookingStatus.CONFIRMED]: 'Booking has been confirmed successfully!',
        [BookingStatus.COMPLETED]: 'Booking has been marked as completed!',
        [BookingStatus.CANCELLED]: 'Booking has been cancelled successfully!',
        [BookingStatus.PENDING]: 'Booking has been set to pending!'
      };
      
      alert(statusMessages[newStatus] || 'Booking status updated successfully!');
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

  return (
    <AdminAuthGuard>
      <>
      <title>Bookings | Admin</title>
       <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Bookings Management
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1">
            Manage and monitor all taxi bookings
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md 
                       bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value={BookingStatus.PENDING}>Pending</option>
              <option value={BookingStatus.CONFIRMED}>Confirmed</option>
              <option value={BookingStatus.COMPLETED}>Completed</option>
              <option value={BookingStatus.CANCELLED}>Cancelled</option>
            </select>
          </div>

          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Search
            </label>
            <input
              type="text"
              placeholder="Name, phone, booking ID..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md 
                       bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100
                       placeholder-neutral-500 dark:placeholder-neutral-400
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Start Date
            </label>
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) => handleFilterChange('startDate', e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md 
                       bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={filters.endDate}
              onChange={(e) => handleFilterChange('endDate', e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md 
                       bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Sort by:
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="px-3 py-1 border border-neutral-300 dark:border-neutral-600 rounded-md 
                       bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100
                       text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="created_at">Created Date</option>
              <option value="selected_date">Booking Date</option>
              <option value="fare_charges">Fare</option>
              <option value="status">Status</option>
            </select>
          </div>
          
          <button
            onClick={() => handleFilterChange('sortOrder', filters.sortOrder === 'ASC' ? 'DESC' : 'ASC')}
            className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-700 
                     text-neutral-700 dark:text-neutral-300 rounded-md hover:bg-neutral-200 
                     dark:hover:bg-neutral-600 transition-colors"
          >
            {filters.sortOrder === 'ASC' ? '↑ Ascending' : '↓ Descending'}
          </button>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Showing {bookings.length} of {pagination.totalCount} bookings
        </p>
        
        <div className="flex items-center gap-2">
          <label className="text-sm text-neutral-600 dark:text-neutral-400">
            Per page:
          </label>
          <select
            value={filters.limit}
            onChange={(e) => handleFilterChange('limit', parseInt(e.target.value))}
            className="px-2 py-1 border border-neutral-300 dark:border-neutral-600 rounded-md 
                     bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100
                     text-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">Loading bookings...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center">
            <p className="text-red-600 dark:text-red-400">{error}</p>
            <button
              onClick={fetchBookings}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        ) : bookings.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">No bookings found matching your filters.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-neutral-50 dark:bg-neutral-700">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Booking Details
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Fare
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-700">
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                          {booking.name || 'Anonymous'}
                        </div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          {booking.phone}
                        </div>
                        <div className="text-xs text-neutral-400 dark:text-neutral-500">
                          ID: {booking.id}
                        </div>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-4">
                      <div className="text-sm text-neutral-900 dark:text-neutral-100 max-w-xs">
                        <div className="truncate">
                          <span className="text-green-600 dark:text-green-400">From:</span> {booking.pickup_address_name || booking.pickup_address}
                        </div>
                        <div className="truncate">
                          <span className="text-red-600 dark:text-red-400">To:</span> {booking.drop_off_address_name || booking.drop_off_address}
                        </div>
                        {booking.distance && (
                          <div className="text-xs text-neutral-500 dark:text-neutral-400">
                            Distance: {Number(booking.distance).toFixed(1)} miles
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {formatCurrency(booking.fare_charges)}
                      </div>
                      {booking.discounted_fare && booking.discounted_fare !== booking.fare_charges && (
                        <div className="text-xs text-green-600 dark:text-green-400">
                          Discounted: {formatCurrency(booking.discounted_fare)}
                        </div>
                      )}
                      {booking.payment_mode && (
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          {booking.payment_mode}
                        </div>
                      )}
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS[booking.status]}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-neutral-900 dark:text-neutral-100">
                        {booking.selected_date ? new Date(booking.selected_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'N/A'}
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">
                        {booking.selected_time || 'No time'}
                      </div>
                      <div className="text-xs text-neutral-400 dark:text-neutral-500">
                        Created: {formatDate(booking.created_at)}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                        <button
                          onClick={() => router.push(`/admin/bookings/${booking.id}`)}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 text-xs sm:text-sm"
                        >
                          View Details
                        </button>
                        {booking.status !== BookingStatus.COMPLETED && (
                          <select
                            value={booking.status}
                            onChange={(e) => {
                              const newStatus = e.target.value as BookingStatus;
                              if (newStatus !== booking.status) {
                                handleUpdateBookingStatus(booking.booking_id, newStatus);
                              }
                            }}
                            className="text-xs sm:text-sm px-2 py-1 border border-neutral-300 dark:border-neutral-600 rounded bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                          >
                            <option value={BookingStatus.PENDING}>Pending</option>
                            <option value={BookingStatus.CONFIRMED}>Confirmed</option>
                            <option value={BookingStatus.COMPLETED}>Completed</option>
                            <option value={BookingStatus.CANCELLED}>Cancelled</option>
                          </select>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Page {pagination.page} of {pagination.totalPages}
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => handleFilterChange('page', pagination.page - 1)}
              disabled={!pagination.hasPrev}
              className="px-3 py-1 text-sm bg-white dark:bg-neutral-800 border border-neutral-300 
                       dark:border-neutral-600 rounded-md text-neutral-700 dark:text-neutral-300
                       hover:bg-neutral-50 dark:hover:bg-neutral-700 disabled:opacity-50 
                       disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {/* Page numbers */}
            {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
              const pageNum = Math.max(1, pagination.page - 2) + i;
              if (pageNum > pagination.totalPages) return null;
              
              return (
                <button
                  key={pageNum}
                  onClick={() => handleFilterChange('page', pageNum)}
                  className={`px-3 py-1 text-sm rounded-md ${
                    pageNum === pagination.page
                      ? 'bg-blue-500 text-white'
                      : 'bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button
              onClick={() => handleFilterChange('page', pagination.page + 1)}
              disabled={!pagination.hasNext}
              className="px-3 py-1 text-sm bg-white dark:bg-neutral-800 border border-neutral-300 
                       dark:border-neutral-600 rounded-md text-neutral-700 dark:text-neutral-300
                       hover:bg-neutral-50 dark:hover:bg-neutral-700 disabled:opacity-50 
                       disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Booking Details Modal */}
      {showModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  Booking Details
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 
                           dark:hover:text-neutral-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Booking ID
                    </label>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">
                      {selectedBooking.booking_id}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Status
                    </label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS[selectedBooking.status]}`}>
                      {selectedBooking.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Customer Name
                    </label>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">
                      {selectedBooking.name || 'Anonymous'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Phone
                    </label>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">
                      {selectedBooking.phone}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Route Details
                  </label>
                  <div className="bg-neutral-50 dark:bg-neutral-700 p-3 rounded-md space-y-2">
                    <div>
                      <span className="text-green-600 dark:text-green-400 font-medium">Pickup:</span>
                      <p className="text-sm text-neutral-900 dark:text-neutral-100">
                        {selectedBooking.pickup_address_name || selectedBooking.pickup_address}
                      </p>
                    </div>
                    <div>
                      <span className="text-red-600 dark:text-red-400 font-medium">Destination:</span>
                      <p className="text-sm text-neutral-900 dark:text-neutral-100">
                        {selectedBooking.drop_off_address_name || selectedBooking.drop_off_address}
                      </p>
                    </div>
                    {selectedBooking.distance && (
                      <div>
                        <span className="text-neutral-600 dark:text-neutral-400 font-medium">Distance:</span>
                        <span className="text-sm text-neutral-900 dark:text-neutral-100 ml-2">
                          {Number(selectedBooking.distance).toFixed(1)} miles
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Fare
                    </label>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">
                      {formatCurrency(selectedBooking.fare_charges)}
                    </p>
                    {selectedBooking.discounted_fare && selectedBooking.discounted_fare !== selectedBooking.fare_charges && (
                      <p className="text-xs text-green-600 dark:text-green-400">
                        Discounted: {formatCurrency(selectedBooking.discounted_fare)}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Payment
                    </label>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">
                      {selectedBooking.payment_mode || 'Not specified'}
                    </p>
                    {selectedBooking.payment_id && (
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        ID: {selectedBooking.payment_id}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Booking Date & Time
                    </label>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">
                      {selectedBooking.selected_date ? new Date(selectedBooking.selected_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'N/A'}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {selectedBooking.selected_time || 'No time specified'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Created
                    </label>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">
                      {formatDate(selectedBooking.created_at)}
                    </p>
                  </div>
                </div>

                {/* Status Update Actions */}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                    Update Status
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    {selectedBooking.status === BookingStatus.PENDING && (
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to confirm booking ${selectedBooking.booking_id}?`)) {
                            handleUpdateBookingStatus(selectedBooking.booking_id, BookingStatus.CONFIRMED);
                            setShowModal(false);
                          }
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                      >
                        Confirm Booking
                      </button>
                    )}
                    {selectedBooking.status === BookingStatus.CONFIRMED && (
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to mark booking ${selectedBooking.booking_id} as completed?`)) {
                            handleUpdateBookingStatus(selectedBooking.booking_id, BookingStatus.COMPLETED);
                            setShowModal(false);
                          }
                        }}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
                      >
                        Mark Completed
                      </button>
                    )}
                    {(selectedBooking.status === BookingStatus.PENDING || selectedBooking.status === BookingStatus.CONFIRMED) && (
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to cancel booking ${selectedBooking.booking_id}? This action cannot be undone.`)) {
                            handleUpdateBookingStatus(selectedBooking.booking_id, BookingStatus.CANCELLED);
                            setShowModal(false);
                          }
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
      </>
    </AdminAuthGuard>
  );
}
