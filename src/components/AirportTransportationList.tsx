import React from 'react';
import { GiPathDistance } from 'react-icons/gi';

interface TransportationItem {
    label: string;
}

interface AirportTransportationListProps {
    items: TransportationItem[];
    title?: string;
}

const AirportTransportationList: React.FC<AirportTransportationListProps> = ({
                                                                                 items,
                                                                                 title = 'On Demand Airport Transportation Services',
                                                                             }) => {
    return (
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 max-w-4xl mx-auto mt-8">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                {title}
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-green-theme shadow-md p-4 w-52 text-center hover:shadow-lg transition"
                    >
                        <div className="flex justify-center mb-2">
                            <GiPathDistance className="w-8 h-8 text-yellow-500" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AirportTransportationList;
