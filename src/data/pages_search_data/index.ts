import laxContent from './lax';
import anaheim from './anaheim';
import beverly from './beverly_hills';
import burbank from './burbank';
import camarillo from './camarillo';
import carlsbad from './carlsbad';
import data_point from './data_point';
import costa_mesa from './costa_mesa';
import fillmore from './fillmore';
import gledale from './gledale';
import hermosa from './hermosa_beach';
import irvine from './irvine';
import lax from './lax';
import longbeach from './long_beach';
import malibu from './malibu';
import manhatten from './manhattan';
import new_port from './new-port-beach';
import ojai from './ojai';
import oxnard from './oxnard';

// Define the type for page data
interface PageData {
    url: string;
    content: string;
}

// Array of all page content with proper typing
const pagesContent: PageData[] = [
    laxContent,
    anaheim,
    beverly,
    burbank,
    camarillo,
    carlsbad,
    data_point,
    costa_mesa,
    fillmore,
    gledale,
    hermosa,
    irvine,
    lax,
    longbeach,
    malibu,
    manhatten,
    new_port,
    ojai,
    oxnard
];

// Define the return type for search results
interface SearchResult {
    url: string;
    snippet?: string;
}

/**
 * Searches through page content for the given query
 * @param query The search term to look for
 * @returns Array of SearchResult objects containing URLs of matching pages
 */
const searchPageData = (query: string): SearchResult[] => {
    if (!query || typeof query !== 'string') return [];

    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return [];

    const results: SearchResult[] = [];

    pagesContent.forEach((page: PageData) => {
        if (page?.content?.toLowerCase().includes(searchTerm)) {
            results.push({
                url: page.url,
                snippet: getSnippet(page.content, searchTerm)
            });
        }
    });

    return results;
}

/**
 * Helper function to extract a snippet of text around the search term
 * @param content The full content to search through
 * @param searchTerm The term being searched for
 * @returns A string snippet with context around the search term
 */
const getSnippet = (content: string, searchTerm: string): string => {
    const contentLower = content.toLowerCase();
    const index = contentLower.indexOf(searchTerm);

    if (index === -1) return '';

    const snippetLength = 50; // Characters to show before and after
    const start = Math.max(0, index - snippetLength);
    const end = Math.min(content.length, index + searchTerm.length + snippetLength);

    let snippet = content.substring(start, end);

    // Add ellipsis if we didn't get the full content
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';

    return snippet;
}

export default searchPageData;