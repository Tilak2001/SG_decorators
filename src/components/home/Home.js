import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/home/navbar/CustomNavbar';
import Carousel from './components/Carousel';
import DecorationsGrid from './components/home/cards/DecorationsGrid';
import PartyComponent from './components/home/cards/PartyComponent';
import BirthdayComponent from './components/home/cards/BirthdayComponent';
import CandlelightComponent from './components/home/cards/CandlelightComponent';
import PremiumComponent from './components/home/cards/PremiumComponent';
import AnniversaryComponent from './components/home/cards/AnniversaryComponent';
import FirstNightComponent from './components/home/cards/FirstNightComponent';
import KidsBirthdayComponent from './components/home/cards/KidsBirthdayComponent';
import BabyShowerComponent from './components/home/cards/BabyShowerComponent';
import BalloonBouquetsComponent from './components/home/cards/BalloonBouquetsComponent';
import CustomerStats from './components/home/branding/CustomerStats';
import MediaBrands from './components/home/branding/MediaBrands';
import Footer from './components/home/footer/Footer';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Navbar Component */}
            <CustomNavbar />

            {/* Carousel Component */}
            <Carousel />

            {/* Routes for different pages */}
            <Routes>
                <Route path="/" element={<DecorationsGrid />} />
                <Route path="/party" element={<PartyComponent />} />
                <Route path="/birthday" element={<BirthdayComponent />} />
                <Route path="/candlelight" element={<CandlelightComponent />} />
                <Route path="/premium" element={<PremiumComponent />} />
                <Route path="/anniversary" element={<AnniversaryComponent />} />
                <Route path="/first-night" element={<FirstNightComponent />} />
                <Route path="/kids-birthday" element={<KidsBirthdayComponent />} />
                <Route path="/baby-shower" element={<BabyShowerComponent />} />
                <Route path="/balloon-bouquets" element={<BalloonBouquetsComponent />} />
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
