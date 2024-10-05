import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './navbar/CustomNavbar'; // Navbar Component
import Carousel from './hero/Carousel'; // Carousel Component
import DecorationsGrid from './cards/DecorationsGrid'; // Decorations Grid
// import PartyComponent from './cards/PartyComponent';
// import CandlelightComponent from './cards/CandlelightComponent';
// import PremiumComponent from './cards/PremiumComponent';
// import AnniversaryComponent from './cards/AnniversaryComponent';
// import FirstNightComponent from './cards/FirstNightComponent';
// import KidsBirthdayComponent from './cards/KidsBirthdayComponent';
// import BabyShowerComponent from './cards/BabyShowerComponent';
// import BalloonBouquetsComponent from './cards/BalloonBouquetsComponent';
// import Birthday from '../decoration/Birthday'; // Birthday Component
import CustomerStats from './branding/CustomerStats'; // Customer Stats Component
import MediaBrands from './branding/MediaBrands'; // Media Brands Component
import Footer from './footer/Footer'; // Footer Component
import { Route, Routes } from 'react-router-dom'; // Router Components

const Home = () => {
    return (
        <div>
            {/* Navbar and Carousel Components */}
            <CustomNavbar />
            <Carousel />

            {/* Routes for different pages */}
            <Routes>
                <Route path="/" element={<DecorationsGrid />} />
                {/* <Route path="/party" element={<PartyComponent />} />
                <Route path="/birthday" element={<Birthday />} />
                <Route path="/candlelight" element={<CandlelightComponent />} />
                <Route path="/premium" element={<PremiumComponent />} />
                <Route path="/anniversary" element={<AnniversaryComponent />} />
                <Route path="/first-night" element={<FirstNightComponent />} />
                <Route path="/kids-birthday" element={<KidsBirthdayComponent />} />
                <Route path="/baby-shower" element={<BabyShowerComponent />} />
                <Route path="/balloon-bouquets" element={<BalloonBouquetsComponent />} /> */}
            </Routes>

            {/* Customer Stats and Media Brands Section */}
            <div className="text-center py-12">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    Helping many Customers remember Their Special Occasions
                </h1>
                <CustomerStats />
                <MediaBrands />
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default Home;
