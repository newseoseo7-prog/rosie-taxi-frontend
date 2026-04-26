// app/api/delete_page/route.ts
import { NextResponse } from 'next/server';

// This endpoint previously deleted a page from SQLite by ID.
// That functionality has been removed, so the route now returns 410 Gone.

export async function POST(): Promise<NextResponse> {
    return NextResponse.json(
        { message: 'The custom pages API has been removed.' },
        { status: 410 }
    );
}