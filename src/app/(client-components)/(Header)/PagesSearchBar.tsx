'use client'
import React, { FC, useState, useRef, useEffect } from "react";
import Link from "next/link";
import {Route} from "next";

interface SearchResult {
    id: number;
    url: string;
    title: string;
    type: string;
    snippet?: string;
}

const PageSearchBar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const searchRef = useRef<HTMLDivElement>(null);
    const debounceTimeout = useRef<NodeJS.Timeout>();

    // Fetch search results from API
    const fetchSearchResults = async (query: string) => {
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/search_pages?q=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setSearchResults(data.results);
        } catch (err) {
            setError('Error fetching results');
            console.error('Search error:', err);
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    // Debounce search input
    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            fetchSearchResults(searchQuery);
        }, 300);

        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, [searchQuery]);

    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex-1 max-w-xs ml-4 me-5" ref={searchRef}>
            <div
                className={`flex items-center px-3 py-2 rounded-full border ${
                    isSearchOpen
                        ? "border-primary-500 bg-white dark:bg-neutral-800 shadow-lg"
                        : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600"
                }`}
                onClick={() => setIsSearchOpen(true)}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchOpen(true)}
                />
                <button className="text-neutral-500 dark:text-neutral-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>

            {/* Search Dropdown Results */}
            {isSearchOpen && (
                <div className="absolute right-4 left-4 mt-2 bg-white dark:bg-neutral-800 rounded-lg shadow-xl z-50 border border-neutral-200 dark:border-neutral-700 max-h-96 overflow-y-auto">
                    {isLoading ? (
                        <div className="px-4 py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
                            Searching...
                        </div>
                    ) : error ? (
                        <div className="px-4 py-6 text-center text-sm text-red-500 dark:text-red-400">
                            {error}
                        </div>
                    ) : searchResults.length > 0 ? (
                        <ul className="py-2">
                            {searchResults.map((result) => (
                                <li key={result.id}>
                                    <Link
                                        href={result.url as Route} // Type assertion if needed
                                        className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                        onClick={() => setIsSearchOpen(false)}
                                    >
                                        <div className="font-medium">{result.title}</div>
                                        <div className="text-xs text-neutral-500">{result.type}</div>
                                        {result.snippet && (
                                            <div className="text-xs text-neutral-400 mt-1 line-clamp-1">
                                                {result.snippet}
                                            </div>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="px-4 py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
                            {searchQuery ? "No results found" : "Type to search"}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default PageSearchBar;