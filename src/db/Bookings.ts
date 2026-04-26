// Using numeric string IDs instead of UUIDs
import database from '../utils/database'; // Adjust the import path as needed

// Function to generate numeric booking ID
async function generateNumericBookingId(): Promise<string> {
  const query = 'SELECT MAX(CAST(booking_id AS UNSIGNED)) as max_id FROM bookings WHERE booking_id REGEXP "^[0-9]+$"';
  const result = await database.query(query);
  const maxId = result[0]?.max_id || 0;
  return String(maxId + 1);
}
import { 
  BookingStatus, 
  type Booking as BookingType, 
  type CreateBookingInput, 
  type UpdateBookingInput, 
  type BookingQueryOptions 
} from '@/types/booking';

// ==================== TYPE DEFINITIONS ====================

// Re-export shared types for backward compatibility
export { BookingStatus, type CreateBookingInput, type UpdateBookingInput, type BookingQueryOptions } from '@/types/booking';

// Server-side booking interface that extends the shared type
export interface Booking extends Omit<BookingType, 'created_at' | 'updated_at'> {
  aqi?: any; // Keep any server-specific fields
  created_at: Date; // Server uses Date objects
  updated_at: Date;
}

// ==================== BOOKING REPOSITORY ====================

export class BookingRepository {
  constructor() {} // No pool needed in constructor

  // =============== CRUD OPERATIONS ===============

  async createBooking(bookingData: CreateBookingInput): Promise<Booking> {
    const bookingId = bookingData.booking_id || await generateNumericBookingId();
    const query = `
      INSERT INTO bookings (
        user_id, pickup_latlng, drop_off_latlng, pickup_address, drop_off_address,
        fare_charges, booking_id, status, payment_mode, payment_id,
        name, phone, email, selected_time, selected_date, directions, distance,
        drop_off_address_name, pickup_address_name, discounted_fare,
        pickup_place_id, dropoff_place_id  -- NEW: Add these columns
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      bookingData.user_id,
      bookingData.pickup_latlng,
      bookingData.drop_off_latlng,
      bookingData.pickup_address,
      bookingData.drop_off_address,
      bookingData.fare_charges,
      bookingId,
      BookingStatus.PENDING,
      bookingData.payment_mode || null,
      bookingData.payment_id || null,
      bookingData.name || null,
      bookingData.phone || null,
      bookingData.email || null,
      bookingData.selected_time,
      bookingData.selected_date || null,
      bookingData.directions,
      bookingData.distance,
      bookingData.drop_off_address_name,
      bookingData.pickup_address_name,
      bookingData.discounted_fare,
      bookingData.pickup_place_id,
      bookingData.dropoff_place_id,
    ];

    const result = await database.query(query, values);
    let booking = await this.findBookingById(result.insertId);
    if (!booking) {
      throw new Error("Booking not found after creation"); // More specific error message
    }
    return booking;
  }

  async findBookingById(id: number): Promise<Booking | null> {
    const query = 'SELECT * FROM bookings WHERE id = ?';
    const rows = await database.query(query, [id]);
    return rows[0] || null;
  }

  async findBookingByBookingId(bookingId: string): Promise<Booking | null> {
    const query = 'SELECT * FROM bookings WHERE booking_id = ?';
    const rows = await database.query(query, [bookingId]);
    return rows[0] || null;
  }


  async updateBooking(bookingId: string, updateData: UpdateBookingInput): Promise<Booking> {
    const fieldsToUpdate = [];
    const values = [];

    if (updateData.status !== undefined) {
      fieldsToUpdate.push('status = ?');
      values.push(updateData.status);
    }
    if (updateData.payment_token !== undefined) {
      fieldsToUpdate.push('payment_token = ?');
      values.push(updateData.payment_token);
    }

    if (updateData.payment_mode !== undefined) {
      fieldsToUpdate.push('payment_mode = ?');
      values.push(updateData.payment_mode);
    }

    if (updateData.payment_id !== undefined) {
      fieldsToUpdate.push('payment_id = ?');
      values.push(updateData.payment_id);
    }

    if (updateData.payment_time !== undefined) {
      fieldsToUpdate.push('payment_time = ?');
      values.push(updateData.payment_time);
    }

    if (updateData.pickup_latlng !== undefined) {
      fieldsToUpdate.push('pickup_latlng = ?');
      values.push(updateData.pickup_latlng);
    }

    if (updateData.drop_off_latlng !== undefined) {
      fieldsToUpdate.push('drop_off_latlng = ?');
      values.push(updateData.drop_off_latlng);
    }

    if (updateData.pickup_address !== undefined) {
      fieldsToUpdate.push('pickup_address = ?');
      values.push(updateData.pickup_address);
    }

    if (updateData.drop_off_address !== undefined) {
      fieldsToUpdate.push('drop_off_address = ?');
      values.push(updateData.drop_off_address);
    }

    // NEW: Update pickup_place_id
    if (updateData.pickup_place_id !== undefined) {
      fieldsToUpdate.push('pickup_place_id = ?');
      values.push(updateData.pickup_place_id);
    }

    // NEW: Update dropoff_place_id
    if (updateData.dropoff_place_id !== undefined) {
      fieldsToUpdate.push('dropoff_place_id = ?');
      values.push(updateData.dropoff_place_id);
    }

    if (updateData.fare_charges !== undefined) {
      fieldsToUpdate.push('fare_charges = ?');
      values.push(updateData.fare_charges);
    }

    if (updateData.name !== undefined) {
      fieldsToUpdate.push('name = ?');
      values.push(updateData.name);
    }

    if (updateData.phone !== undefined) {
      fieldsToUpdate.push('phone = ?');
      values.push(updateData.phone);
    }

    if (updateData.email !== undefined) {

      fieldsToUpdate.push('email = ?');
      values.push(updateData.email);
    }

    if (updateData.selected_time !== undefined) {
      fieldsToUpdate.push('selected_time = ?');
      values.push(updateData.selected_time);
    }

    if (updateData.selected_date !== undefined) {
      fieldsToUpdate.push('selected_date = ?');
      values.push(updateData.selected_date);
    }

    if (fieldsToUpdate.length === 0) {
      throw new Error('No valid fields provided for update');
    }

    values.push(bookingId);

    const query = `
      UPDATE bookings
      SET ${fieldsToUpdate.join(', ')}
      WHERE booking_id = ?
    `;

    await database.query(query, values);
    const booking = await this.findBookingByBookingId(bookingId);
    if (!booking) {
      throw new Error('Booking not found');
    }
    return booking;
  }

  async deleteBooking(id: number): Promise<boolean> {
    const query = 'DELETE FROM bookings WHERE id = ?';
    const result = await database.query(query, [id]);
    return result.affectedRows > 0;
  }

  // =============== SPECIALIZED OPERATIONS ===============

  async confirmBooking(bookingId: string, paymentData: {
    payment_mode: string;
    payment_id: string;
  }): Promise<Booking> {
    return this.updateBooking(bookingId, {
      status: BookingStatus.CONFIRMED,
      payment_mode: paymentData.payment_mode,
      payment_id: paymentData.payment_id,
      payment_time: new Date()
    });
  }

  async cancelBooking(bookingId: string): Promise<Booking> {
    return this.updateBooking(bookingId, {
      status: BookingStatus.CANCELLED
    });
  }

  async completeBooking(bookingId: string): Promise<Booking> {
    return this.updateBooking(bookingId, {
      status: BookingStatus.COMPLETED
    });
  }

  // =============== QUERY OPERATIONS ===============

  async listBookings(options: BookingQueryOptions = {}): Promise<Booking[]> {
    const whereClauses = ['1 = 1'];
    const values: any[] = [];

    if (options.user_id) {
      whereClauses.push('user_id = ?');
      values.push(options.user_id);
    }

    if (options.status) {
      whereClauses.push('status = ?');
      values.push(options.status);
    }

    if (options.start_date) {
      whereClauses.push('selected_date >= ?');
      values.push(options.start_date);
    }

    if (options.end_date) {
      whereClauses.push('selected_date <= ?');
      values.push(options.end_date);
    }

    if (options.search) {
      whereClauses.push('(LOWER(name) LIKE ? OR phone LIKE ? OR LOWER(booking_id) LIKE ? OR LOWER(pickup_address) LIKE ? OR LOWER(drop_off_address) LIKE ?)');
      const searchPattern = `%${options.search.toLowerCase()}%`;
      values.push(searchPattern, `%${options.search}%`, searchPattern, searchPattern, searchPattern);
    }

    const orderBy = options.sort_by || 'created_at';
    const orderDirection = options.sort_order || 'DESC';
    const limit = options.limit ? `LIMIT ${options.limit}` : '';
    const offset = options.offset ? `OFFSET ${options.offset}` : '';

    const query = `
      SELECT * FROM bookings
      WHERE ${whereClauses.join(' AND ')}
      ORDER BY ${orderBy} ${orderDirection}
                 ${limit} ${offset}
    `;

    const rows = await database.query(query, values);
    return rows as Booking[];
  }

  async countBookings(options: Omit<BookingQueryOptions, 'limit' | 'offset'> = {}): Promise<number> {
    const whereClauses = ['1 = 1'];
    const values: any[] = [];

    if (options.user_id) {
      whereClauses.push('user_id = ?');
      values.push(options.user_id);
    }

    if (options.status) {
      whereClauses.push('status = ?');
      values.push(options.status);
    }

    if (options.start_date) {
      whereClauses.push('selected_date >= ?');
      values.push(options.start_date);
    }

    if (options.end_date) {
      whereClauses.push('selected_date <= ?');
      values.push(options.end_date);
    }

    if (options.search) {
      whereClauses.push('(LOWER(name) LIKE ? OR phone LIKE ? OR LOWER(booking_id) LIKE ? OR LOWER(pickup_address) LIKE ? OR LOWER(drop_off_address) LIKE ?)');
      const searchPattern = `%${options.search.toLowerCase()}%`;
      values.push(searchPattern, `%${options.search}%`, searchPattern, searchPattern, searchPattern);
    }

    const query = `
      SELECT COUNT(*) as count FROM bookings
      WHERE ${whereClauses.join(' AND ')}
    `;

    const result = await database.query(query, values);
    return result[0].count;
  }

  async getUserBookings(userId: string, options: Omit<BookingQueryOptions, 'user_id'> = {}): Promise<Booking[]> {
    return this.listBookings({
      ...options,
      user_id: userId
    });
  }

  // =============== STATISTICS OPERATIONS ===============

  async countAllBookings(): Promise<number> {
    const query = 'SELECT COUNT(*) as count FROM bookings';
    const result = await database.query(query);
    return result[0].count;
  }

  async countBookingsByStatus(status: BookingStatus): Promise<number> {
    const query = 'SELECT COUNT(*) as count FROM bookings WHERE status = ?';
    const result = await database.query(query, [status]);
    return result[0].count;
  }

  async getBookingsByStatus(): Promise<{ [key: string]: number }> {
    const query = `
      SELECT status, COUNT(*) as count 
      FROM bookings 
      GROUP BY status
    `;
    
    const rows = await database.query(query);
    const result: { [key: string]: number } = {};
    
    rows.forEach((row: any) => {
      result[row.status] = row.count;
    });
    
    return result;
  }

  async getTotalRevenue(): Promise<number> {
    const query = `
      SELECT SUM(discounted_fare) as total_revenue 
      FROM bookings 
      WHERE status = ?
    `;
    
    const result = await database.query(query, [BookingStatus.COMPLETED]);
    return result[0].total_revenue || 0;
  }

  async getRevenueByPeriod(period: 'today' | 'week' | 'month' | 'year'): Promise<number> {
    let whereClause = '';
    
    switch (period) {
      case 'today':
        whereClause = 'DATE(created_at) = CURDATE()';
        break;
      case 'week':
        whereClause = 'created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)';
        break;
      case 'month':
        whereClause = 'MONTH(created_at) = MONTH(NOW()) AND YEAR(created_at) = YEAR(NOW())';
        break;
      case 'year':
        whereClause = 'YEAR(created_at) = YEAR(NOW())';
        break;
    }
    
    const query = `
      SELECT SUM(discounted_fare) as revenue 
      FROM bookings 
      WHERE status IN (?, ?) AND ${whereClause}
    `;
    
    const result = await database.query(query, [BookingStatus.COMPLETED, BookingStatus.CONFIRMED]);
    return result[0].revenue || 0;
  }

  async getRecentBookings(limit: number = 10): Promise<Booking[]> {
    const query = `
      SELECT * FROM bookings 
      ORDER BY created_at DESC 
      LIMIT ?
    `;
    
    const rows = await database.query(query, [limit]);
    return rows as Booking[];
  }

  async getBookingsCreatedToday(): Promise<number> {
    const query = `
      SELECT COUNT(*) as count 
      FROM bookings 
      WHERE DATE(created_at) = CURDATE()
    `;
    
    const result = await database.query(query);
    return result[0].count;
  }

  async getBookingsCreatedThisWeek(): Promise<number> {
    const query = `
      SELECT COUNT(*) as count 
      FROM bookings 
      WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
    `;
    
    const result = await database.query(query);
    return result[0].count;
  }

  async getBookingsCreatedThisMonth(): Promise<number> {
    const query = `
      SELECT COUNT(*) as count 
      FROM bookings 
      WHERE MONTH(created_at) = MONTH(NOW()) 
      AND YEAR(created_at) = YEAR(NOW())
    `;
    
    const result = await database.query(query);
    return result[0].count;
  }

  async getAverageBookingValue(): Promise<number> {
    const query = `
      SELECT AVG(fare_charges) as avg_value 
      FROM bookings 
      WHERE status = 'completed'
    `;
    
    const result = await database.query(query);
    return result[0].avg_value || 0;
  }

  async getPopularRoutes(limit: number = 10): Promise<{ pickup_address: string; drop_off_address: string; count: number }[]> {
    const query = `
      SELECT 
        pickup_address, 
        drop_off_address, 
        COUNT(*) as count 
      FROM bookings 
      WHERE status IN ('completed', 'confirmed') 
      GROUP BY pickup_address, drop_off_address 
      ORDER BY count DESC 
      LIMIT ?
    `;
    
    const rows = await database.query(query, [limit]);
    return rows as { pickup_address: string; drop_off_address: string; count: number }[];
  }

  // =============== TRANSACTION OPERATIONS ===============

  async createBookingWithTransaction(bookingData: CreateBookingInput): Promise<Booking> {
    let booking: Booking | null;

    await database.transaction(async (connection) => {
      const bookingId = bookingData.booking_id || await generateNumericBookingId();
      
      const query = `
        INSERT INTO bookings (
          user_id, pickup_latlng, drop_off_latlng, pickup_address, drop_off_address,
          fare_charges, booking_id, status, payment_mode, payment_id,
          name, phone, selected_time, selected_date,
          pickup_place_id, dropoff_place_id, -- NEW: Add these columns
          directions, distance, drop_off_address_name, pickup_address_name, discounted_fare
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        bookingData.user_id,
        bookingData.pickup_latlng,
        bookingData.drop_off_latlng,
        bookingData.pickup_address,
        bookingData.drop_off_address,
        bookingData.fare_charges,
        bookingId,
        BookingStatus.PENDING,
        bookingData.payment_mode || null,
        bookingData.payment_id || null,
        bookingData.name,
        bookingData.phone,
        bookingData.selected_time || null,
        bookingData.selected_date || null,
        bookingData.pickup_place_id, // NEW: Add pickup_place_id
        bookingData.dropoff_place_id, // NEW: Add dropoff_place_id
        bookingData.directions,
        bookingData.distance,
        bookingData.drop_off_address_name,
        bookingData.pickup_address_name,
        bookingData.discounted_fare,
      ];

      const result = await connection.query(query, values);
      booking = await this.findBookingById(result.insertId);
    });

    return booking!;
  }
}