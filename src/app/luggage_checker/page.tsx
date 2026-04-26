'use client'
import { useState, useEffect } from 'react';
import BgGlassmorphism from "@/components/BgGlassmorphism";

interface Bag {
    id: number;
    name: string;
    dimensions: number[];
    volume: number;
    color: string;
    orientation: 'horizontal' | 'vertical';
}

const LuggageCalculator = () => {
    // Standard bag sizes (length × width × height in inches)
    const bagTypes = {
        carryOn: {
            name: 'Carry-on',
            dimensions: [22, 14, 9],
            volume: 22 * 14 * 9,
            color: 'bg-red-400'
        },
        checked: {
            name: 'Checked',
            dimensions: [27, 21, 14],
            volume: 27 * 21 * 14,
            color: 'bg-teal-400'
        },
        duffel: {
            name: 'Duffel',
            dimensions: [24, 12, 12],
            volume: 24 * 12 * 12,
            color: 'bg-blue-400'
        },
        backpack: {
            name: 'Backpack',
            dimensions: [18, 12, 8],
            volume: 18 * 12 * 8,
            color: 'bg-sky-300'
        },
    };

    // Car trunk dimensions (width × height × depth in inches)
    const carTrunk = {
        width: 40,
        height: 20,
        depth: 30,
        get volume() { return this.width * this.height * this.depth; }
    };

    const [bags, setBags] = useState<Bag[]>([]);
    const [selectedBagType, setSelectedBagType] = useState<keyof typeof bagTypes>('carryOn');
    const [usedVolume, setUsedVolume] = useState(0);
    const [remainingVolume, setRemainingVolume] = useState(carTrunk.volume);
    const [remainingPercentage, setRemainingPercentage] = useState(100);

    const addBag = () => {
        const newBag: Bag = {
            ...bagTypes[selectedBagType],
            id: Date.now(),
            orientation: 'horizontal'
        };
        setBags([...bags, newBag]);
    };

    const removeBag = (id: number) => {
        setBags(bags.filter(bag => bag.id !== id));
    };

    const toggleOrientation = (id: number) => {
        setBags(bags.map(bag =>
            bag.id === id
                ? {
                    ...bag,
                    orientation: bag.orientation === 'horizontal' ? 'vertical' : 'horizontal'
                }
                : bag
        ));
    };

    useEffect(() => {
        const totalUsed = bags.reduce((sum, bag) => sum + bag.volume, 0);
        setUsedVolume(totalUsed);

        const remaining = Math.max(0, carTrunk.volume - totalUsed);
        setRemainingVolume(remaining);

        const percentage = Math.max(0, (remaining / carTrunk.volume) * 100);
        setRemainingPercentage(Math.round(percentage));
    }, [bags]);

    return (
        <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
            <BgGlassmorphism />

            <div className="container relative py-16 lg:py-28">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Car Luggage Space Calculator
                </h1>

                <div className="flex flex-col lg:flex-row gap-8 bg-white/50 dark:bg-neutral-800/30 backdrop-blur-lg p-6 rounded-3xl shadow-xl">
                    <div className="flex-1 space-y-6">
                        <div
                            className="border-4 border-gray-800 dark:border-neutral-600 p-4 bg-white/70 dark:bg-neutral-700/50 rounded-xl"
                            style={{
                                width: `${carTrunk.width * 5}px`,
                                height: `${carTrunk.height * 5}px`
                            }}
                        >
                            <h2 className="text-lg font-semibold dark:text-white">Trunk Space</h2>
                            <p className="text-sm mb-3 dark:text-neutral-300">
                                {carTrunk.width}″ W × {carTrunk.height}″ H × {carTrunk.depth}″ D
                            </p>

                            <div className="flex flex-wrap gap-2 content-start mt-4">
                                {bags.map(bag => (
                                    <div
                                        key={bag.id}
                                        className={`${bag.color} relative flex items-center justify-center border-2 border-gray-800 dark:border-neutral-600 rounded-lg cursor-pointer transition-all hover:opacity-80 text-white text-xs text-center overflow-hidden`}
                                        style={{
                                            width: `${bag.orientation === 'horizontal'
                                                ? bag.dimensions[0] * 3
                                                : bag.dimensions[1] * 3}px`,
                                            height: `${bag.orientation === 'horizontal'
                                                ? bag.dimensions[1] * 3
                                                : bag.dimensions[0] * 3}px`,
                                        }}
                                        onClick={() => toggleOrientation(bag.id)}
                                        title={`Click to rotate. ${bag.name}: ${bag.dimensions.join('″ × ')}″`}
                                    >
                                        <span>{bag.name}</span>
                                        <button
                                            className="absolute top-0.5 right-0.5 bg-black/50 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs hover:bg-red-500"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeBag(bag.id);
                                            }}
                                            aria-label={`Remove ${bag.name}`}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/70 dark:bg-neutral-700/50 p-4 rounded-xl">
                            <h3 className="text-lg font-semibold mb-3 dark:text-white">Space Information</h3>
                            <div className="w-full h-5 bg-gray-300 dark:bg-neutral-600 rounded-full mb-3 overflow-hidden">
                                <div
                                    className="h-full transition-all duration-300"
                                    style={{
                                        width: `${remainingPercentage}%`,
                                        backgroundColor: remainingPercentage > 30 ? '#4CAF50' : '#F44336'
                                    }}
                                    aria-valuenow={remainingPercentage}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                            <ul className="space-y-1 dark:text-neutral-300">
                                <li>Space used: {usedVolume} in³ ({Math.round((usedVolume / carTrunk.volume) * 100)}%)</li>
                                <li>Space remaining: {remainingVolume} in³ ({remainingPercentage}%)</li>
                                <li>Total trunk volume: {carTrunk.volume} in³</li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/3 bg-white/70 dark:bg-neutral-700/50 p-6 rounded-xl space-y-6">
                        <h2 className="text-xl font-bold dark:text-white">Add Bags</h2>

                        <div>
                            <label htmlFor="bag-type" className="block mb-1 font-medium dark:text-neutral-300">
                                Bag Type:
                            </label>
                            <select
                                id="bag-type"
                                className="w-full p-2 border border-gray-300 dark:border-neutral-600 rounded bg-white dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-blue-500"
                                value={selectedBagType}
                                onChange={(e) => setSelectedBagType(e.target.value as keyof typeof bagTypes)}
                            >
                                {Object.entries(bagTypes).map(([key, bag]) => (
                                    <option
                                        key={key}
                                        value={key}
                                        className="dark:bg-neutral-800"
                                    >
                                        {bag.name} ({bag.dimensions.join('″ × ')}″)
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={addBag}
                            className="w-full py-2 px-4 rounded bg-green-500 hover:bg-green-600 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Add {bagTypes[selectedBagType].name} Bag
                        </button>

                        <div>
                            <h3 className="text-lg font-semibold mb-3 dark:text-white">Bag Samples</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.entries(bagTypes).map(([key, bag]) => (
                                    <div
                                        key={key}
                                        className={`${bag.color} p-3 rounded-lg text-white`}
                                    >
                                        <strong className="font-semibold">{bag.name}</strong>
                                        <p className="text-sm">{bag.dimensions.join('″ × ')}″</p>
                                        <p className="text-sm">{bag.volume} in³</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LuggageCalculator;