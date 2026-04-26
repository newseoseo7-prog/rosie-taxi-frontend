import { NextRequest, NextResponse } from 'next/server';
import { UserRepository } from '@/db/users';
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

    const userRepo = new UserRepository();
    const bookingRepo = new BookingRepository();

    // Get statistics in parallel for better performance
    const [
      totalUsers,
      totalBookings,
      completedBookings,
      confirmedBookings,
      pendingBookings,
      totalRevenue,
      recentBookings,
      usersByRole,
      bookingsByStatus
    ] = await Promise.all([
      userRepo.countUsers({ includeInactive: false }),
      bookingRepo.countBookings(),
      bookingRepo.countBookingsByStatus(BookingStatus.COMPLETED),
      bookingRepo.countBookingsByStatus(BookingStatus.CONFIRMED),
      bookingRepo.countBookingsByStatus(BookingStatus.PENDING),
      bookingRepo.getTotalRevenue(),
      bookingRepo.getRecentBookings(5),
      userRepo.getUsersByRole(),
      bookingRepo.getBookingsByStatus()
    ]);

    // Calculate additional metrics - treat confirmed bookings as completed for business purposes
    const successfulBookings = completedBookings + confirmedBookings;
    const completionRate = totalBookings > 0 ? Math.round((successfulBookings / totalBookings) * 100) : 0;
    
    const statistics = {
      users: {
        total: totalUsers,
        byRole: usersByRole,
        activeUsers: totalUsers // For now, same as total since we exclude inactive
      },
      bookings: {
        total: totalBookings,
        completed: completedBookings,
        confirmed: confirmedBookings,
        pending: pendingBookings,
        completionRate,
        byStatus: bookingsByStatus,
        recent: recentBookings
      },
      revenue: {
        total: totalRevenue,
        currency: 'USD'
      },
      locations: {
        active: 0 // Will be implemented when location system is built
      }
    };

    return NextResponse.json(statistics);
  } catch (error) {
    console.error('Error fetching admin statistics:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

