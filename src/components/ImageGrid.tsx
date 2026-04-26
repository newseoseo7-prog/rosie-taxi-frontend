import React from 'react';

type ImageItem = {
    src: string;
    alt?: string;
    caption: string;
    url: string;  // New URL property
};

type ImageGridProps = {
    gridTitle: string;
    gridSubtitle: string;
    images: ImageItem[];
};

const
    ImageGrid: React.FC<ImageGridProps> = ({ gridTitle, gridSubtitle, images }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Grid header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{gridTitle}</h1>
                <h2 className="text-2xl text-gray-600">{gridSubtitle}</h2>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div key={`image-${index}`} className="group">
                        <a
                            href={image.url}
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 font-medium px-2 transition-colors duration-200"
                        >
                        {/* Image container with hover effects */}
                        <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-3">
                            <img
                                src={image.src}
                                alt={image.alt || `Image ${index + 1}`}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>

                        {/* Clickable caption */}
                        <div className="text-center text-xl md:text-3xl mt-3  font-semibold text-black">

                                {image.caption}

                        </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGrid;