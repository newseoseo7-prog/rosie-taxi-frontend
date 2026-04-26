// Shared types and enums for bookings that can be safely imported on both client and server
export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed'
}

export interface Booking {
  id: number;
  user_id: string;
  pickup_latlng: string;
  drop_off_latlng: string;
  pickup_address: string;
  drop_off_address: string;
  pickup_place_id: string;
  dropoff_place_id: string;
  fare_charges: number;
  distance: number;
  directions: string;
  payment_token: string;
  booking_id: string;
  status: BookingStatus;
  payment_mode: string | null;
  payment_id: string | null;
  name: string;
  phone: string;
  email: string;
  selected_time: Date | null;
  payment_time: Date | null;
  selected_date: Date | null;
  created_at: string;
  updated_at: string;
}

export interface CreateBookingInput {
  user_id: string;
  booking_id?: string; // Optional since it will be auto-generated
  pickup_latlng: string;
  drop_off_latlng: string;
  pickup_address: string;
  pickup_place_id: string;
  dropoff_place_id: string;
  drop_off_address: string;
  pickup_address_name: string;
  drop_off_address_name: string;
  directions: string;
  fare_charges: number;
  discounted_fare: number;
  distance: number;
  name: string;
  phone: string;
  email: string;
  selected_time?: string;
  selected_date?: Date;
  payment_mode?: string;
  payment_id?: string;
}

export interface UpdateBookingInput {
  status?: BookingStatus;
  payment_mode?: string | null;
  payment_id?: string | null;
  payment_token?: string | null;
  payment_time?: Date | null;
  pickup_latlng?: string;
  drop_off_latlng?: string;
  pickup_address?: string;
  drop_off_address?: string;
  pickup_place_id?: string;
  dropoff_place_id?: string;
  fare_charges?: number;
  distance?: number;
  name?: string;
  phone?: string;
  email?: string;
  selected_time?: Date | null;
  selected_date?: Date | null;
}

export interface BookingQueryOptions {
  user_id?: string;
  status?: BookingStatus;
  start_date?: Date;
  end_date?: Date;
  search?: string;
  limit?: number;
  offset?: number;
  sort_by?: 'created_at' | 'selected_date' | 'fare_charges';
  sort_order?: 'ASC' | 'DESC';
}

export interface BookingDetails {
  bookingId: string;
  name: string;
  email: string;
  phone: string;
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  dropLocation: string;
  mileage: string;
  total: string;
}