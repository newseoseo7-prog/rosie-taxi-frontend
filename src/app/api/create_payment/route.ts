import {NextResponse} from "next/server";
import {BookingRepository, BookingStatus, UpdateBookingInput} from "@/db/Bookings";
import { getAnAcceptPaymentPage } from '@/lib/authorizeNet';


const bookingRepository = new BookingRepository();

export async function POST(
    request: Request,
) {
     const data = await request.json();
    try {
        const {booking_id,payment_method} = data
        if (!booking_id || typeof booking_id !== 'string' || !/^\d+$/.test(booking_id)) {
            return NextResponse.json({ error: 'Invalid numeric booking ID' }, { status: 400 });
        }
        const booking =await bookingRepository.findBookingByBookingId(booking_id);
        if (!booking) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }

        const tokenResponse = await getAnAcceptPaymentPage();
        let token = tokenResponse?.token ;

        let b:UpdateBookingInput = {
            status: BookingStatus.PENDING,
            payment_mode: payment_method,
            payment_id: 'payment_id',
            payment_token: token,
        }

        const updatedBooking = bookingRepository.updateBooking(booking_id, b);
        if (!updatedBooking) {
            return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
        }

        //dummy redirect
        let url = `/pay?id=${booking_id}`

        return NextResponse.json({
            payment_url:url,
            token: '',
            booking_id: booking_id,
            status: 200
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
    }
}