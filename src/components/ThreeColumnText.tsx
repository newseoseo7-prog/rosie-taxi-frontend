import React from 'react';
import { FaPlaneDeparture, FaCar, FaClock } from 'react-icons/fa';

type TextItem = {
    icon: React.ReactNode; // Can be an SVG or icon component
    heading: string;
    content: string;
};

type ThreeColumnTextProps = {
    sectionTitle: string;
    sectionSubtitle?: string;
    items: TextItem[];
};

const ThreeColumnText: React.FC<ThreeColumnTextProps> = ({
                                                             sectionTitle,
                                                             sectionSubtitle,
                                                             items
                                                         }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {sectionTitle}
                </h2>
                {sectionSubtitle && (
                    <p className="mt-3 text-xl text-gray-500">
                        {sectionSubtitle}
                    </p>
                )}
            </div>

            {/* Three Column Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {items.map((item, index) => (
                    <div key={`text-item-${index}`} className="flex flex-col items-center text-center">
                        {/* Icon */}
                        <div className="flex items-center justify-center h-12 w-12 rounded-md  text-indigo-500 mb-4">
                            {item.icon}
                        </div>

                        {/* Heading */}
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {item.heading}
                        </h3>

                        {/* Paragraph */}
                        <p className="text-base text-gray-500">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThreeColumnText;
