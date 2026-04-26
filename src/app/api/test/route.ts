
import { NextResponse } from 'next/server'
import {BookingDetails} from "@/types/booking";
import {emailService} from "@/lib/EmailService";

export async function GET(req: Request) {

    let bookingDetails:BookingDetails = {
        bookingId: "1",
        name: "asdf",
        email: "asdjfasf@asdf.com",
        phone: "5465456",
        pickupDate: new Date().toISOString(),
        pickupTime: new Date().toISOString(),
        pickupLocation: "asdf",
        dropLocation: "asdfasf",
        mileage: "5 miles",
        total: "10$"
    }
    try{
        await emailService.sendBookingConfirmation(bookingDetails,"nhnansari@gmail.com");
        return NextResponse.json({
            message: 'Payment successful',
            transactionId: 1,
            status: 'success',
            amount: 10,
        });
    }
    catch (e){
        return NextResponse.json(e);
    }

}