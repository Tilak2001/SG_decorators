import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD

=======
>>>>>>> c5d2030696ca688cb8d7deea7a294dc983b2c58b
import CustomNavbar from './navbar/CustomNavbar'; // Already in 'home'
import Carousel from './hero/Carousel'; // Go up one level to 'components'
import DecorationsGrid from './cards/DecorationsGrid'; // Inside 'home/cards'
import PartyComponent from './cards/PartyComponent';
import BirthdayComponent from './cards/BirthdayComponent';
import CandlelightComponent from './cards/CandlelightComponent';
import PremiumComponent from './cards/PremiumComponent';
import AnniversaryComponent from './cards/AnniversaryComponent';
import FirstNightComponent from './cards/FirstNightComponent';
import KidsBirthdayComponent from './cards/KidsBirthdayComponent';
import BabyShowerComponent from './cards/BabyShowerComponent';
import BalloonBouquetsComponent from './cards/BalloonBouquetsComponent';

import Birthday from '../decoration/birthday';
import CustomerStats from './branding/CustomerStats';
import MediaBrands from './branding/MediaBrands';
import Footer from './footer/Footer';

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
                 <Birthday />
            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default Home;
