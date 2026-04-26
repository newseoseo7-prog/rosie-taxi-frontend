import { NextRequest, NextResponse } from 'next/server';
import database from '@/utils/database';
import { verifyAdminAuth } from '@/lib/adminAuth';

export async function GET(request: NextRequest,    { params }: { params: Promise<{ id: number }> }
) {

    let p = await params
    let id = p.id
    try {
        const adminUser = await verifyAdminAuth(request);
        if (!adminUser) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const location = await database.query(
            'SELECT * FROM locations WHERE id = ?',
            [id]
        );

        if (!location || (location as any[]).length === 0) {
            return NextResponse.json({ error: 'Location not found' }, { status: 404 });
        }

        return NextResponse.json({ location: (location as any[])[0] });
    } catch (error) {
        console.error('Error fetching location:', error);
        return NextResponse.json({ error: 'Failed to fetch location' }, { status: 500 });
    }
}