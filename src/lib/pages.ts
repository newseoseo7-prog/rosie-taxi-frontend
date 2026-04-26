// NOTE: This module previously implemented page storage backed by a SQLite database via `./db`.
// SQLite has been removed from the project; all functions now throw to avoid silent misuse.
// Any remaining imports of this file should be cleaned up where possible.

// Define a more comprehensive Metadata interface
export interface PageMetadata {
    title?: string;
    description?: string;
    robots?: string;
    canonical?: string;
    openGraph?: {
        title?: string;
        description?: string;
        url?: string;
        siteName?: string;
        locale?: string;
        type?: string;
        images?: Array<{
            url: string;
            secureUrl?: string;
            alt?: string;
        }>;
    };
    twitter?: {
        card?: string;
        title?: string;
        description?: string;
        images?: string[];
    };
}

export interface PageListing {
    id: number;
    title: string;
    path: string;
    createdAt: string;
}

export interface PageDetails extends PageListing {
    html: string;
    js: string | null;
    metadata: PageMetadata | null;
}

function disabled<T>(): T {
    throw new Error("SQLite-backed pages API has been removed.");
}

export async function pageExists(path: string): Promise<boolean> {
    return disabled();
}

export function getAllPages(): PageListing[] {
    return disabled();
}

export function deletePageById(id: number): boolean {
    return disabled();
}

export function getPageByPath(path: string): PageDetails | null {
    return disabled();
}

export function getPageById(id: number): PageDetails | null {
    return disabled();
}

export function upsertPage(
    path: string,
    title: string,
    html: string,
    js: string | null = null,
    metadata: PageMetadata | null = null
): PageDetails {
    return disabled();
}
