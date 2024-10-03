// components/Card.js
import React from "react";

const Card = ({ image, title }) => {
    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white m-4">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <h2 className="font-bold text-lg mb-2 text-center">{title}</h2>
            </div>
        </div>
    );
};

export default Card;
