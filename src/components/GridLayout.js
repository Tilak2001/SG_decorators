// components/GridLayout.js
import React from "react";
import Card from "./Card";

const GridLayout = () => {
    const decorations = [
        { image: "party.jpg", title: "Party Decorations" },
        { image: "birthday.jpg", title: "Birthday Party Decorations" },
        { image: "candlelight.jpg", title: "Candlelight Dinners" },
        { image: "premium.jpg", title: "Premium Decors" },
        { image: "anniversary.jpg", title: "Anniversary Decorations" },
        { image: "first-night.jpg", title: "First Night Decorations" },
        { image: "kids.jpg", title: "Kids Birthday Decorations" },
        { image: "baby-shower.jpg", title: "Baby Shower" },
        { image: "balloon-bouquet.jpg", title: "Balloon Bouquets" },
        // Add more items here
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {decorations.map((item, index) => (
                <Card key={index} image={item.image} title={item.title} />
            ))}
        </div>
    );
};

export default GridLayout;
