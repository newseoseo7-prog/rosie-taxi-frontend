import { NextResponse } from 'next/server';
import searchProvider from '@/data/pages_search_data/index';

// This endpoint performs search over static content only and no longer touches SQLite.

export async function GET(request: Request): Promise<NextResponse> {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q');

        if (!query) {
            return NextResponse.json(
                { message: 'Search query is required' },
                { status: 400 }
            );
        }

        const result = searchProvider(query);

        return NextResponse.json({
            query,
            results: result,
            count: result.length
        });

    } catch (error) {
        console.error('Error during search:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}