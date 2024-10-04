import React from 'react';

const MediaBrands = () => {
    return (
        <div className="flex justify-center items-center space-x-12 mb-12">
            {/* In the Media */}
            <div className="flex flex-col items-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <img src="/SG_decorators/images/news-min.png" alt="LBB" className="w-16" />
                    {/* <img src="/images/fbstart_logo.png" alt="FbStart" className="w-16" />
                    <img src="/images/times_internet_logo.png" alt="Times Internet" className="w-16" /> */}
                </div>
                <h3 className="text-2xl font-bold">In the Media</h3>
                <p className="text-gray-500">Featured by the best</p>
            </div>

            {/* Top Brands */}
            <div className="flex flex-col items-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <img src="/SG_decorators/images/brands-min.png" alt="Marriott" className="w-16" />
                    {/* <img src="/images/taj_logo.png" alt="Taj" className="w-16" />
                    <img src="/images/radisson_logo.png" alt="Radisson" className="w-16" /> */}
                </div>
                <h3 className="text-2xl font-bold">Top Brands</h3>
                <p className="text-gray-500">Partnered with top brands</p>
            </div>
        </div>
    );
};

export default MediaBrands;
