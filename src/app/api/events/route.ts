import { NextResponse } from 'next/server';
import { createClient } from 'redis';

interface EventResult {
    title: string;
    date?: {
        start_date?: string;
        when?: string;
    };
    address?: string[];
    link?: string;
    description?: string;
    // Add other fields you need from the response
}

interface SerpApiResponse {
    events_results?: EventResult[];
    error?: string;
    search_metadata: {
        id: string;
        status: string;
        json_endpoint: string;
        created_at: string;
        processed_at: string;
        google_events_url: string;
        raw_html_file: string;
        total_time_taken: number;
    };
    // Add other fields from the response you might need
}

// Create Redis client
const redisClient = createClient({
    url: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
});

// Connect to Redis
(async () => {
    try {
        console.log("Connecting to Redis")
        await redisClient.connect();
        console.log('Connected to Redis');
    } catch (error) {
        console.error('Redis connection error:', error);
    }
})();

async function fetchEvents(city: string): Promise<SerpApiResponse> {
    // Check cache first
    const cacheKey = `events:${city.toLowerCase()}`;
    console.log("Checking in Caceh")
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
         return JSON.parse(cachedData);
    }

    const apiKey = 'c2bda46bd293f2870a02d5ac8a08d3badf161aa665819fea6960626a5fccab9b';
    const endpoint = 'https://serpapi.com/search.json';

    console.log("Loading from serpapi")
    const params = new URLSearchParams({
        engine: 'google_events',
        q: 'Events in ' + city,
        hl: 'en',
        gl: 'us',
        api_key: apiKey
    });

    try {
        const response = await fetch(`${endpoint}?${params.toString()}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: SerpApiResponse = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        // Cache the result for 24 hours (86400 seconds)
        await redisClient.setEx(cacheKey, 86400, JSON.stringify(data));

        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
}

export async function GET(request: Request): Promise<NextResponse> {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('city');

        if (!query) {
            return NextResponse.json(
                { message: 'Search query is required' },
                { status: 400 }
            );
        }

        let result = await fetchEvents(query);

        return NextResponse.json(result);

    } catch (error) {
        console.error('Error during search:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}

// Close Redis connection when the server shuts down
process.on('SIGTERM', async () => {
    await redisClient.quit();
    console.log('Redis connection closed');
});