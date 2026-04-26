"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "@/shared/Button";
import { useEffect, useState } from "react";

const mockData = [
    {
        name: "LAX",
        text: "Los Angeles International Airport known as LAX is one the busiest Airports in the World. Planning your transportation to and from LAX requires a capable company who can make your trip hassle free, relaxed, and avoid cancelation, if possible.",
        images: ["/images/Los-Angeles-International-Airport.webp"],
        buttonText: "CHECK FLIGHTS STATUS",
        buttonRoute: "https://www.flylax.com/",
        heights: {
            mobile: {
                image: "255px",
                card: "400px"
            },
            desktop: {
                image: "255px",
                card: "400px"
            }
        }
    },
    {
        name: "Hollywood BOB",
        text: "Hollywood Burbank Airport, also known as Bob Hope Airport, is a convenient regional airport serving Burbank, Pasadena, Glendale, and nearby areas. With less congestion and easier access, it’s ideal for travelers seeking a smoother, stress-free journey.",
        images: ["/images/burbank-airport.webp"],
        buttonText: "CHECK FLIGHTS STATUS",
        buttonRoute: "https://www.flightradar24.com/data/airports/bob",
        heights: {
            mobile: {
                image: "255px",
                card: "400px"
            },
            desktop: {
                image: "255px",
                card: "400px"
            }
        }
    },
    {
        name: "LongBeach (LGB)) Airport",
        text: "Long Beach Airport (LGB) is a convenient public airport located just minutes from downtown Long Beach. Known for its ease of access and efficient service, LGB offers a smooth travel experience for both business and leisure passengers. Taxi available 24/7.",
        images: ["/images/LGB_Airport.webp"],
        buttonText: "CHECK FLIGHTS STATUS",
        buttonRoute: "https://www.longbeach.gov/lgb/",
        heights: {
            mobile: {
                image: "255px",
                card: "400px"
            },
            desktop: {
                image: "255px",
                card: "400px"
            }
        }
    },
    {
        name: "San Luis Obispo Airport",
        text: "San Luis Obispo County Regional Airport (SBP) is a small, efficient airport located just south of downtown San Luis Obispo. Offering a relaxed atmosphere and direct flights to major cities, SBP provides a smooth, stress-free travel experience for Central Coast residents and visitors alike.",
        images: ["/images/airports/slo-airport.webp"],
        buttonText: "CHECK FLIGHTS STATUS",
        buttonRoute: "/airports/slo",
        heights: {
            mobile: {
                image: "255px",
                card: "400px"
            },
            desktop: {
                image: "255px",
                card: "400px"
            }
        }
    },
];

export default function ImageSlider() {
    const [isMobile, setIsMobile] = useState(false);

    // Check if the screen is mobile on component mount and on resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkIfMobile();
        
        // Add resize listener
        window.addEventListener('resize', checkIfMobile);
        
        // Clean up
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="w-full"
            >
                {mockData.map((city, index) => {
                    // Determine device type and get appropriate heights
                    const deviceType = isMobile ? 'mobile' : 'desktop';
                    const imageHeight = city.heights?.[deviceType]?.image || '250px';
                    const cardHeight = city.heights?.[deviceType]?.card || 'auto';
                    
                    return (
                        <SwiperSlide key={index} className="text-center">
                            <div className="relative">
                                <div className="relative w-full rounded-t overflow-hidden">
                                    <img
                                        src={city.images[0]}
                                        alt={city.name}
                                        className="w-full"
                                        style={{ height: imageHeight }}
                                    />
                                </div>
                                <div 
                                    className="z-40 bottom-10 rounded-b left-3 right-3 p-4 text-white text-left bg-black"
                                    style={{ height: cardHeight }}
                                >
                                    <h3 className="my-4 text-lg font-semibold">{city.name}</h3>
                                    <p className="text-md">{city.text}</p>
                                    {city.buttonText && (
                                        <a
                                            href={city.buttonRoute}
                                            className="inline-block px-6 py-2 mt-6 text-white border border-gray-400 rounded-md hover:bg-white hover:text-black transition-all duration-200 shadow"
                                        >
                                            {city.buttonText}
                                        </a>

                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}