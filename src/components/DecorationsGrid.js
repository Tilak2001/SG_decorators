


import React from 'react';
import { Link } from 'react-router-dom';

const decorations = [
    { title: 'Party Decorations', imageUrl: '/images/party.avif', route: '/party' },
    { title: 'Birthday Party Decorations', imageUrl: '/images/birthday.avif', route: '/birthday' },
    { title: 'Candlelight Dinners', imageUrl: '/images/candelight.avif', route: '/candlelight' },
    { title: 'Premium Decors', imageUrl: '/images/anniversary.avif', route: '/premium' },
    { title: 'Anniversary Decorations', imageUrl: '/images/premium.avif', route: '/anniversary' },
    { title: 'First Night Decorations', imageUrl: '/images/kid_birthday.avif', route: '/first-night' },
    { title: 'Kids Birthday Decorations', imageUrl: '/images/baby_shower.avif', route: '/kids-birthday' },
    { title: 'Baby Shower', imageUrl: '/images/welcome_baby.avif', route: '/baby-shower' },
    { title: 'Balloon Bouquets', imageUrl: '/images/bachelors.avif', route: '/balloon-bouquets' },
    { title: 'Car Decor', imageUrl: '/images/car_decor.avif', route: '/balloon-bouquets' },
    { title: 'First Birthday', imageUrl: '/images/first.avif', route: '/balloon-bouquets' },
    { title: 'Pre Wedding', imageUrl: '/images/pre_wedding.avif', route: '/balloon-bouquets' },
    { title: 'Event Decorations', imageUrl: '/images/ent.avif', route: '/balloon-bouquets' },
    { title: 'Personalized Decor', imageUrl: '/images/personlized.avif', route: '/balloon-bouquets' },
    { title: 'Bouquets', imageUrl: '/images/bouquets.avif', route: '/balloon-bouquets' },
];

const DecorationsGrid = () => {
    return (
        <div className="p-4">
            {/* First row: 3 images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {decorations.slice(0, 3).map((decoration, index) => (
                    <Link
                        key={index}
                        to={decoration.route}
                        className="relative block overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl" // Added shadow on hover
                    >
                        <img
                            src={decoration.imageUrl}
                            alt={decoration.title}
                            className="w-full h-48 object-cover transition-transform duration-500" // Smooth transition
                        />
                    </Link>
                ))}
            </div>

            {/* Next row: 6 images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-4">
                {decorations.slice(3).map((decoration, index) => (
                    <Link
                        key={index}
                        to={decoration.route}
                        className="relative block overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl" // Added shadow on hover
                    >
                        <img
                            src={decoration.imageUrl}
                            alt={decoration.title}
                            className="w-full h-48 object-cover transition-transform duration-500" // Smooth transition
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DecorationsGrid;
