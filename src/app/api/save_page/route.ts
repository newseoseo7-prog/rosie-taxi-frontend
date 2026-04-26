import { NextResponse } from 'next/server';

// This endpoint previously created/updated pages in a SQLite-backed store.
// That functionality has been removed, so the route now returns 410 Gone.

export async function POST(): Promise<NextResponse> {
    return NextResponse.json(
        { message: 'The custom pages API has been removed.' },
        { status: 410 }
    );
}

export async function GET(): Promise<NextResponse> {
    return NextResponse.json(
        { message: 'The custom pages API has been removed.' },
        { status: 410 }
    );
}