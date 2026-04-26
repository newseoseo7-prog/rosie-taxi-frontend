import axios from 'axios'
import { NextResponse } from 'next/server'

// California-specific aliases for airports and cities
const aliasMap: Record<string, string> = {
    // Major Airports
    'lax': 'Los Angeles International Airport',
    'sfo': 'San Francisco International Airport',
    'oak': 'Oakland International Airport',
    'bur': 'Hollywood Burbank Airport',
    'lgb': 'Long Beach Airport',
    'sna': 'John Wayne Airport',
    'ont': 'Ontario International Airport',
    'smf': 'Sacramento International Airport',
    'sjd': 'San Jose del Cabo International Airport',

    // Cities & Areas
    'la': 'Los Angeles, CA',
    'sf': 'San Francisco, CA',
    'sd': 'San Diego, CA',
    'sac': 'Sacramento, CA',
    'bob': 'Hollywood Burbank Airport',
    'sj': 'San Jose, CA',
    'fresno': 'Fresno, CA',
    'irvine': 'Irvine, CA',
    'anaheim': 'Anaheim, CA',
    'oakland': 'Oakland, CA',
    'pasadena': 'Pasadena, CA',
    'berkeley': 'Berkeley, CA',
    'bakersfield': 'Bakersfield, CA',
    'modesto': 'Modesto, CA',
    'stockton': 'Stockton, CA',
    'riverside': 'Riverside, CA',
    'san bernardino': 'San Bernardino, CA',
    'ventura': 'Ventura, CA',

    // Popular Locations
    'dtla': 'Downtown Los Angeles',
    'hollywood': 'Hollywood, Los Angeles, CA',
    'beverly hills': 'Beverly Hills, CA',
    'santa monica': 'Santa Monica, CA',
    'venice': 'Venice Beach, Los Angeles, CA',
    'napa': 'Napa Valley, CA',
    'yosemite': 'Yosemite National Park, CA',
    'disneyland': 'Disneyland Park, Anaheim, CA',
    'universal': 'Universal Studios Hollywood, CA',
    'caltech': 'California Institute of Technology, Pasadena, CA',
    'stanford': 'Stanford University, CA',
    'ucb': 'University of California, Berkeley',
}
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const searchQuery = searchParams.get('query')

    if (!searchQuery) {
        return NextResponse.json({ message: 'Query parameter is required' }, { status: 400 })
    }

    const normalizedQuery = searchQuery.trim().toLowerCase()
    const resolvedQuery = aliasMap[normalizedQuery] || searchQuery

    try {
        const apiKey = process.env.NEXT_PRIVATE_GOOGLE_MAP_KEY
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?region=us&query=${encodeURIComponent(
            resolvedQuery
        )}&key=${apiKey}`

        const apiResponse = await axios.get(url)
        const locations = apiResponse.data.results

        return NextResponse.json(locations)
    } catch (error) {
        console.error('Error fetching locations:', error)
        return new Response('Cannot fetch locations', { status: 500 })
    }
}
