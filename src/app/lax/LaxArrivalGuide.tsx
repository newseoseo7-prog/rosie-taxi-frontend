import React from "react";

const LAXArrivalGuide = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white rounded-xl shadow-lg">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2 sm:mb-3">After Landing at LAX</h1>
                <p className="text-lg sm:text-xl text-gray-600">Your step-by-step guide to navigating Los Angeles International Airport</p>
            </div>

            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden shadow-md mb-6 sm:mb-8">
                <img
                    src="/images/lax/3-airliners-at-gates-and-control-tower-michael-h.jpg.webp"
                    alt="LAX Airport overview"
                    className="w-full h-auto sm:h-80 object-cover"
                />
            </div>

            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-10 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-gray-100">
                <div className="lg:w-2/5 w-full">
                    <div className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center text-xl sm:text-2xl font-bold mr-4 sm:mr-5 flex-shrink-0">1</div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Exit the Terminal</h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                After you've grabbed your luggage, proceed outside the terminal to the designated pickup areas.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-3/5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    <div className="rounded-xl overflow-hidden shadow-md h-48 sm:h-60">
                        <img
                            src="/images/lax/TomBadleyCarousel.jpg.webp"
                            alt="Terminal exit"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md h-48 sm:h-60">
                        <img
                            src="/images/lax/airport-info.png.webp"
                            alt="Airport information"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md h-48 sm:h-60">
                        <img
                            src="/images/lax/luggage-tag-a-lax-los-angeles-usa-organic-synthesis.jpg.webp"
                            alt="Luggage claim"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-10 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-gray-100">
                <div className="lg:w-2/5 w-full">
                    <div className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center text-xl sm:text-2xl font-bold mr-4 sm:mr-5 flex-shrink-0">2</div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Take the Shuttle Bus</h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Look for the complementary free Shuttle Bus marked
                                <span className="font-bold text-blue-700"> "LAX IT"</span> to take you to zone 31a / 32b.
                                <span className="block mt-2 sm:mt-3 text-blue-700 font-medium">
                                    Travel time: 5-10 minutes within airport grounds
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-3/5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    <div className="rounded-xl overflow-hidden shadow-md h-48 sm:h-60">
                        <img
                            src="/images/lax/DB89083C-FFD7-45E8-9847-956B8659D674.thumb_.jpeg.ab6e5dbc7ad72e3239d1db1b55aad3d2.webp"
                            alt="LAX IT Shuttle Bus sign"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md h-48 sm:h-60">
                        <img
                            src="/images/lax/LAXit-Logo-Round.png.webp"
                            alt="LAX IT logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md h-48 sm:h-60">
                        <img
                            src="/images/lax/LAXit-Review-9-e1700208900586.jpg.webp"
                            alt="Shuttle bus interior"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-10">
                <div className="lg:w-2/5 w-full">
                    <div className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center text-xl sm:text-2xl font-bold mr-4 sm:mr-5 flex-shrink-0">3</div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Meet Your Driver</h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3">
                                Check your phone for a text message containing:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Driver's name and phone number</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Vehicle make, model and color</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>License plate number</span>
                                </li>
                            </ul>
                            <p className="mt-3 sm:mt-4 text-blue-700 font-medium">
                                Typical wait time: 5-10 minutes after shuttle arrival
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-3/5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    <div className="rounded-xl overflow-hidden shadow-md h-48 sm:h-60">
                        <img
                            src="/images/lax/lax-zone-31b.jpeg.webp"
                            alt="Pickup zone"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md h-48 sm:h-60">
                        <img
                            src="/images/lax/LAX-Time.webp"
                            alt="Pickup time"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md h-48 sm:h-60">
                        <img
                            src="/images/lax/Transpo-LAX-1178937087.webp"
                            alt="Transportation area"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Help Card */}
            <div className="mt-12 sm:mt-16 p-5 sm:p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 shadow-sm">
                <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center text-base sm:text-lg font-bold mr-3 sm:mr-4 flex-shrink-0">!</div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-1 sm:mb-2">Traveler Tip</h3>
                        <p className="text-sm sm:text-base text-blue-800">
                            For faster connection, connect to <span className="font-bold">"LAX Free WiFi"</span> network after landing.
                            Keep your phone charged - charging stations are available near most gates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LAXArrivalGuide;