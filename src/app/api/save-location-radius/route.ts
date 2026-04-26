import { NextRequest, NextResponse } from 'next/server';
import database from '@/utils/database';
import { verifyAdminAuth } from '@/lib/adminAuth';

export async function POST(request: NextRequest) {
    try {
        // Verify admin authentication
        const adminUser = await verifyAdminAuth(request);
        if (!adminUser) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const {
            title,
            pickupLocation,
            pickupRadius,
            dropoffLocation,
            dropoffRadius,
            fixedFare,
            minimumFare
        } = body;

        if (!title || !pickupLocation || !dropoffLocation) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const result = await database.query(
            `INSERT INTO locations (
                title, pickup_lat, pickup_lng, pickup_radius,
                dropoff_lat, dropoff_lng, dropoff_radius,
                fixed_fare, minimum_fare
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                title,
                pickupLocation.lat,
                pickupLocation.lng,
                pickupRadius,
                dropoffLocation.lat,
                dropoffLocation.lng,
                dropoffRadius,
                fixedFare,
                minimumFare
            ]
        );

        return NextResponse.json({
            success: true,
            id: (result as any).insertId
        });

    } catch (error) {
        console.error('Error saving location:', error);
        return NextResponse.json(
            { error: 'Failed to save location' },
            { status: 500 }
        );
    }
}

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

        const locations = await database.query(
            'SELECT * FROM locations WHERE is_active = 1 ORDER BY created_at DESC'
        );

        return NextResponse.json({ locations });
    } catch (error) {
        console.error('Error fetching locations:', error);
        return NextResponse.json(
            { error: 'Failed to fetch locations' },
            { status: 500 }
        );
    }
}