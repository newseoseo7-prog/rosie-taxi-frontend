import { NextRequest, NextResponse } from 'next/server';
import database from '@/utils/database';
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

        const locations = await database.query(
            'SELECT * FROM locations ORDER BY created_at DESC'
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