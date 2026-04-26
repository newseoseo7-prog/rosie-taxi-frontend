// utils/emailTemplates.ts
import { BookingDetails } from '@/types/booking';

export const newBookingNotificationTemplate = (booking: BookingDetails): string => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #28a745; padding: 15px; text-align: center; color: white; border-radius: 8px 8px 0 0; }
        .details { margin: 20px 0; background-color: #f8f9fa; padding: 20px; border-radius: 8px; }
        .detail-row { margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #e9ecef; }
        .detail-row:last-child { border-bottom: none; }
        .detail-label { font-weight: bold; display: inline-block; width: 140px; color: #495057; }
        .detail-value { color: #212529; }
        .footer { margin-top: 30px; font-size: 0.9em; color: #666; text-align: center; background-color: #f8f9fa; padding: 15px; border-radius: 8px; }
        .status-badge { background-color: #007bff; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.85em; font-weight: bold; }
        .highlight { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 12px; margin: 15px 0; border-radius: 6px; border-left: 4px solid #ffc107; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🚕 RosieTaxiCab</h2>
          <h3>New Booking Notification</h3>
          <span class="status-badge">Contact Details Updated</span>
        </div>
        
        <div class="highlight">
          <strong>📋 Booking Update:</strong> Customer has provided their contact information for booking <strong>${booking.bookingId}</strong>
        </div>
        
        <div class="details">
          <h4 style="margin-top: 0; color: #495057; border-bottom: 2px solid #28a745; padding-bottom: 8px;">Booking Information</h4>
          
          <div class="detail-row">
            <span class="detail-label">📋 Booking ID:</span>
            <span class="detail-value"><strong>${booking.bookingId}</strong></span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">👤 Customer Name:</span>
            <span class="detail-value">${booking.name}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">📧 Email:</span>
            <span class="detail-value">${booking.email}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">📞 Phone:</span>
            <span class="detail-value">${booking.phone}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">📅 Pickup Date:</span>
            <span class="detail-value">${booking.pickupDate}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">⏰ Pickup Time:</span>
            <span class="detail-value">${booking.pickupTime}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">📍 Pickup Location:</span>
            <span class="detail-value">${booking.pickupLocation}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">🏁 Drop Location:</span>
            <span class="detail-value">${booking.dropLocation}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">📏 Distance:</span>
            <span class="detail-value">${booking.mileage}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">💰 Total Amount:</span>
            <span class="detail-value"><strong style="color: #28a745; font-size: 1.1em;">${booking.total}</strong></span>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Action Required:</strong> Please contact the customer to confirm pickup details.</p>
          <p>📞 Customer Support: (805) 258-8937</p>
          <p style="margin-top: 15px; font-size: 0.8em; color: #999;">
            This is an automated notification from RosieTaxiCab booking system.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const adminNotificationTemplate = (booking: BookingDetails): string => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #dc3545; padding: 10px; text-align: center; color: white; }
        .details { margin: 20px 0; }
        .detail-row { margin-bottom: 10px; }
        .detail-label { font-weight: bold; display: inline-block; width: 150px; }
        .footer { margin-top: 30px; font-size: 0.9em; color: #666; text-align: center; }
        .alert { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; margin: 15px 0; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>RosieTaxiCab - Admin Alert</h2>
          <h4>Customer Contact Details Updated</h4>
        </div>
        
        <div class="alert">
          <strong>Action Required:</strong> Customer has updated their contact details for booking ${booking.bookingId}
        </div>
        
        <div class="details">
          <div class="detail-row">
            <span class="detail-label">Booking ID:</span>
            <span>${booking.bookingId}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Updated Name:</span>
            <span>${booking.name}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Updated Email:</span>
            <span>${booking.email}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Updated Phone:</span>
            <span>${booking.phone}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Pickup Date:</span>
            <span>${booking.pickupDate}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Pickup Time:</span>
            <span>${booking.pickupTime}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Pickup Location:</span>
            <span>${booking.pickupLocation}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Drop Location:</span>
            <span>${booking.dropLocation}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Total:</span>
            <span>${booking.total}</span>
          </div>
        </div>
        
        <div class="footer">
          <p>Please review and take necessary action.</p>
          <p>RosieTaxiCab Admin System</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const bookingConfirmationTemplate = (booking: BookingDetails): string => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8f9fa; padding: 10px; text-align: center; }
        .details { margin: 20px 0; }
        .detail-row { margin-bottom: 10px; }
        .detail-label { font-weight: bold; display: inline-block; width: 150px; }
        .footer { margin-top: 30px; font-size: 0.9em; color: #666; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>RosieTaxiCab</h2>
          <h4>Booking Confirmation</h4>
        </div>
        
        <div class="details">
          <div class="detail-row">
            <span class="detail-label">Your Booking Id:</span>
            <span>${booking.bookingId}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Name:</span>
            <span>${booking.name}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Email:</span>
            <span>${booking.email}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Phone:</span>
            <span>${booking.phone}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Pickup date:</span>
            <span>${booking.pickupDate}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Pickup Time:</span>
            <span>${booking.pickupTime}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Pickup Location:</span>
            <span>${booking.pickupLocation}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Drop Location:</span>
            <span>${booking.dropLocation}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Mileage:</span>
            <span>${booking.mileage}</span>
          </div>
          
          <div class="detail-row">
            <span class="detail-label">Total inclusive:</span>
            <span>${booking.total}</span>
          </div>
        </div>
        
        <div class="footer">
          <p>Thank you for your booking!</p>
          <p>Customer support: (805) 258-8937</p>
        </div>
      </div>
    </body>
    </html>
  `;
};