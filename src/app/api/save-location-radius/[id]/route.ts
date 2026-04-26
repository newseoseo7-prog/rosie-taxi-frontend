import { NextRequest, NextResponse } from 'next/server';
import database from '@/utils/database';
import { verifyAdminAuth } from '@/lib/adminAuth';

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: number }> }

) {
    try {
        // Verify admin authentication
        const adminUser = await verifyAdminAuth(request);
        if (!adminUser) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        let p = await params
        const body = await request.json();
        const { is_active } = body;
        const id = p.id

        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'Invalid location ID' },
                { status: 400 }
            );
        }

        await database.query(
            'UPDATE locations SET is_active = ? WHERE id = ?',
            [is_active, id]
        );

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error updating location:', error);
        return NextResponse.json(
            { error: 'Failed to update location' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: number }> }
) {
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
        const { title, fixed_fare, minimum_fare } = body;
        console.log(fixed_fare,minimum_fare)
        const { id } = await params
        console.log(id)

      //  const id = parseInt(params.id);

        if (isNaN(id) || !title?.trim()) {
            return NextResponse.json(
                { error: 'Invalid data' },
                { status: 400 }
            );
        }

        await database.query(
            'UPDATE locations SET title = ?, fixed_fare = ?, minimum_fare = ? WHERE id = ?',
            [title, fixed_fare, minimum_fare, id]
        );

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error updating location:', error);
        return NextResponse.json(
            { error: 'Failed to update location' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: number }> }
) {
    try {
        // Verify admin authentication
        const adminUser = await verifyAdminAuth(request);
        if (!adminUser) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        let p = await params
        const id = p.id ;

        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'Invalid location ID' },
                { status: 400 }
            );
        }

        await database.query('DELETE FROM locations WHERE id = ?', [id]);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error deleting location:', error);
        return NextResponse.json(
            { error: 'Failed to delete location' },
            { status: 500 }
        );
    }
}