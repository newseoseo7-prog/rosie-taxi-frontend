import { NextRequest, NextResponse } from 'next/server';
import { BookingRepository } from '@/db/Bookings';
import { verifyAdminAuth } from '@/lib/adminAuth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  try {
    let p = await params;
    // Verify admin authentication
    const adminUser = await verifyAdminAuth(request);
    if (!adminUser) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const bookingId = p.id;

    if (!bookingId) {
      return NextResponse.json({ error: 'Booking ID is required' }, { status: 400 });
    }

    const bookingRepo = new BookingRepository();
    
    // Try to find booking by numeric ID first, then by booking_id
    let booking =  await bookingRepo.findBookingById(bookingId);


    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      booking
    });

  } catch (error) {
    console.error('Error fetching booking details:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}