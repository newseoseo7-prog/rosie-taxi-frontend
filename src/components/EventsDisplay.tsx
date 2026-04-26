'use client'
import React, { useState, useEffect } from 'react';

interface EventDate {
    start_date: string;
    when: string;
}

interface EventLocationMap {
    image: string;
    link: string;
    serpapi_link: string;
}

interface TicketInfo {
    source: string;
    link: string;
    link_type: string;
}

interface Venue {
    name: string;
    rating?: number;
    reviews?: number;
    link?: string;
}

interface Event {
    title: string;
    date: EventDate;
    address: string[];
    link: string;
    event_location_map: EventLocationMap;
    description?: string;
    ticket_info?: TicketInfo[];
    venue?: Venue;
    thumbnail?: string;
    image?: string;
}

interface EventsData {
    events_results: Event[];
}

interface EventsDisplayProps {
    city: string;
}

const EventsDisplay: React.FC<EventsDisplayProps> = ({ city }) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`/api/events?city=${encodeURIComponent(city)}`, {cache:"no-store"});

                if (!response.ok) {
                    throw new Error(`Failed to fetch events: ${response.status}`);
                }

                const data: EventsData = await response.json();
                setEvents(data.events_results || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                setEvents([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [city]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] py-12">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-blue-100 h-12 w-12"></div>
                </div>
                <p className="mt-4 text-lg text-gray-600 font-medium animate-pulse">
                    Discovering awesome events in {city}...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-3xl mx-auto my-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-sm border border-red-100">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-lg font-medium text-red-800">Oops! Something went wrong</h3>
                        <div className="mt-2 text-sm text-red-700">
                            <p>{error}</p>
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (events.length === 0) {
        return (
            <div className="max-w-3xl mx-auto my-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-sm border border-blue-100 text-center">
                <svg className="mx-auto h-12 w-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-blue-800">No events found</h3>
                <div className="mt-2 text-sm text-blue-600">
                    <p>We couldn't find any events in {city}. Try checking back later or searching a different location.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                    Events in <span className="text-blue-600">{city.charAt(0).toUpperCase() + city.slice(1)}</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover the best happenings around you
                </p>
            </div>

            <div className="space-y-6">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Event Image */}
                            <div className="md:w-2/5 h-48 md:h-56 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                                <img
                                    src={event.image || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                    }}
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium">
                                        {event.date.when}
                                    </span>
                                </div>
                            </div>

                            {/* Event Content */}
                            <div className="md:w-3/5 p-6 md:p-8">
                                <div className="flex flex-col h-full">
                                    <div className="flex-grow">
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                                            <a href={event.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                                                {event.title}
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </h2>

                                        <div className="flex items-center text-gray-600 mb-3">
                                            <svg className="flex-shrink-0 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div className="ml-2">
                                                {event.address.map((line, i) => (
                                                    <p key={i} className="text-sm">{line}</p>
                                                ))}
                                            </div>
                                        </div>

                                        {event.venue && (
                                            <div className="mb-3">
                                                <p className="text-sm text-gray-700">
                                                    <span className="font-medium">Venue: </span>
                                                    {event.venue.link ? (
                                                        <a href={event.venue.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                            {event.venue.name}
                                                        </a>
                                                    ) : (
                                                        <span>{event.venue.name}</span>
                                                    )}
                                                    {event.venue.rating && (
                                                        <span className="ml-2 inline-flex items-center text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                                                            <svg className="w-3 h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            {event.venue.rating} ({event.venue.reviews})
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                        )}

                                        {event.description && (
                                            <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                                                {event.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Footer with Tickets and Button */}
                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            {event.ticket_info && event.ticket_info.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {event.ticket_info.map((ticket, i) => (
                                                        <a
                                                            key={i}
                                                            href={ticket.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all hover:shadow-sm
                                                            ${ticket.link_type === 'tickets'
                                                                ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                                                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}"
                                                        >
                                                            {ticket.link_type === 'tickets' ? (
                                                                <>
                                                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                                                                    </svg>
                                                                    Tickets
                                                                </>
                                                            ) : 'More info'}
                                                            <span className="ml-1">· {ticket.source}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            )}

                                            <a
                                                href={event.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:-translate-y-0.5"
                                            >
                                                View Event Details
                                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsDisplay;