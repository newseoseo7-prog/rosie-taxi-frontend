// services/email.service.ts
import nodemailer from 'nodemailer';
import { bookingConfirmationTemplate, adminNotificationTemplate, newBookingNotificationTemplate } from '@/utils/emailTemplates';
import {BookingDetails} from "@/types/booking";

class EmailService {
    private transporter: nodemailer.Transporter;
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || '587'),
            secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }

    async sendBookingConfirmation(booking: BookingDetails,email:string|null=null): Promise<void> {

        let receiver = email?email:booking.email;
        const mailOptions = {
            from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
            to: receiver,
            subject: 'Your Booking Confirmation',
            html: bookingConfirmationTemplate(booking),
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log('Booking confirmation email sent successfully');
        } catch (error) {
            console.error('Error sending booking confirmation email:', error);
            throw error;
        }
    }

    async sendAdminNotification(booking: BookingDetails): Promise<void> {
        const adminEmail = process.env.ADMIN_EMAIL;
        
        if (!adminEmail) {
            console.warn('ADMIN_EMAIL environment variable not set, skipping admin notification');
            return;
        }

        const mailOptions = {
            from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
            to: adminEmail,
            subject: `Contact Details Updated - Booking ${booking.bookingId}`,
            html: adminNotificationTemplate(booking),
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log('Admin notification email sent successfully');
        } catch (error) {
            console.error('Error sending admin notification email:', error);
            throw error;
        }
    }

    async sendNewBookingNotification(booking: BookingDetails): Promise<void> {
        const adminEmail = process.env.ADMIN_EMAIL;
        
        if (!adminEmail) {
            console.warn('ADMIN_EMAIL environment variable not set, skipping new booking notification');
            return;
        }

        const mailOptions = {
            from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
            to: adminEmail,
            subject: `New Booking - Contact Details Provided - ${booking.bookingId}`,
            html: newBookingNotificationTemplate(booking),
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log('New booking notification email sent successfully');
        } catch (error) {
            console.error('Error sending new booking notification email:', error);
            throw error;
        }
    }
}

export const emailService = new EmailService();