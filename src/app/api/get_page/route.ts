// app/api/get_page/route.ts
import { NextResponse } from 'next/server';

// This endpoint previously returned a page from SQLite by ID.
// That functionality has been removed, so the route now returns 410 Gone.

export async function GET(): Promise<NextResponse> {
    return NextResponse.json(
        { message: 'The custom pages API has been removed.' },
        { status: 410 }
    );
}