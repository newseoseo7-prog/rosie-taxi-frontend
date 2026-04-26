// import Database from 'better-sqlite3';

interface BookingData {
    user_id: string;
    pickup_latlng: string;
    drop_off_latlng: string;
    pickup_address: string;
    drop_off_address: string;
    fare_charges: number;
    booking_id: string;
    status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    payment_mode?: string | null;
    payment_id?: string | null;
    name: string;
    phone: string;
    selected_time?: string | null;
    payment_time?: string | null;
    selected_date?: string | null;
}

interface BookingRecord extends BookingData {
    id: number;
    created_at: string;
    updated_at: string;
}

class BookingDatabase {
    constructor(dbPath: string = ':memory:') {
        console.warn('BookingDatabase is disabled because SQLite support was removed.', dbPath);
    }

    private disabled<T>(): T {
        throw new Error('BookingDatabase is disabled because SQLite support was removed.');
    }

    public updateBooking(bookingId: string, updateData: { name: string; phone: string }): BookingRecord {
        return this.disabled();
    }

    public createBooking(bookingData: BookingData): BookingRecord {
        return this.disabled();
    }

    public getBookingById(bookingId: number): BookingRecord | null {
        return this.disabled();
    }

    public getBookingByStringId(bookingId: string): BookingRecord | null {
        return this.disabled();
    }

    public listBookings(limit: number = 100, offset: number = 0): BookingRecord[] {
        return this.disabled();
    }

    public confirmedBookings(limit: number = 100, offset: number = 0): BookingRecord[] {
        return this.disabled();
    }

    public updateBookingStatus(
        bookingId: string,
        newStatus: 'pending' | 'confirmed' | 'cancelled' | 'completed',
        paymentMode: string | null = null,
        paymentId: string | null = null,
        paymentTime: string | null = null
    ): boolean {
        return this.disabled();
    }

    public updateSelectedTime(bookingId: string, selectedTime: string): boolean {
        return this.disabled();
    }

    public close(): void {
        console.warn('BookingDatabase.close() called, but no SQLite connection exists.');
    }
}

export default BookingDatabase;
export type { BookingData, BookingRecord };