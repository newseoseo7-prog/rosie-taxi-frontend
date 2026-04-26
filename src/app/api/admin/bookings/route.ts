import { NextRequest, NextResponse } from 'next/server';
import { BookingRepository, BookingStatus } from '@/db/Bookings';
import { verifyAdminAuth } from '@/lib/adminAuth';

export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const adminUser = await verifyAdminAuth(request);
    if (!adminUser) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const bookingRepo = new BookingRepository();
    const { searchParams } = new URL(request.url);

    // Extract query parameters
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search');
    const sortBy = searchParams.get('sortBy') || 'created_at';
    const sortOrder = searchParams.get('sortOrder') || 'DESC';
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const offset = (page - 1) * limit;

    // Build query options
    const queryOptions: any = {
      limit,
      offset,
      sort_by: sortBy,
      sort_order: sortOrder
    };

    if (status && status !== 'all') {
      queryOptions.status = status;
    }

    if (startDate) {
      queryOptions.start_date = startDate;
    }

    if (endDate) {
      queryOptions.end_date = endDate;
    }

    if (search) {
      queryOptions.search = search;
    }

    // Get bookings and total count
    const [bookings, totalCount] = await Promise.all([
      bookingRepo.listBookings(queryOptions),
      bookingRepo.countBookings(queryOptions)
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      bookings: bookings,
      pagination: {
        page,
        limit,
        totalCount: totalCount,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });

  } catch (error) {
    console.error('Error fetching admin bookings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Verify admin authentication
    const adminUser = await verifyAdminAuth(request);
    if (!adminUser) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { bookingId, status, ...updateData } = await request.json();

    if (!bookingId || typeof bookingId !== 'string' || !/^\d+$/.test(bookingId)) {
      return NextResponse.json(
        { error: 'Valid numeric booking ID is required' },
        { status: 400 }
      );
    }

    const bookingRepo = new BookingRepository();

    // Validate status if provided
    if (status && !Object.values(BookingStatus).includes(status)) {
      return NextResponse.json(
        { error: 'Invalid booking status' },
        { status: 400 }
      );
    }

    // Build update object
    const updates: any = {};
    if (status) updates.status = status;
    
    // Add other updateable fields as needed
    Object.keys(updateData).forEach(key => {
      if (['name', 'phone', 'pickup_address', 'drop_off_address'].includes(key)) {
        updates[key] = updateData[key];
      }
    });

    // Update booking
    const updatedBooking = await bookingRepo.updateBooking(bookingId, updates);

    return NextResponse.json({
      message: 'Booking updated successfully',
      booking: updatedBooking
    });

  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}