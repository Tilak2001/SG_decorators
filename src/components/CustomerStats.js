import React from 'react';

const CustomerStats = () => {
    return (
        <div className="flex justify-center items-center space-x-12 mb-12">
            {/* 5+ Million Customers */}
            <div className="flex flex-col items-center">
                <img src="/images/medal-min.png" alt="5+ Million Icon" className="w-20 h-30 mb-4" />
                <h3 className="text-2xl font-bold">5+ Million</h3>
                <p className="text-gray-500">Happy Customers over 6 years</p>
            </div>

            {/* Google Reviews */}
            <div className="flex flex-col items-center">
                <img src="/images/google-reviews-min.png" alt="Google Reviews" className="w-30 h-12 mb-6" />
                <h3 className="text-2xl font-bold">4.4/5 Rating</h3>
                <p className="text-gray-500">from 900+ reviews on Google</p>
            </div>
        </div>
    );
};

export default CustomerStats;
