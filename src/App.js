// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CustomNavbar from './components/CustomNavbar';
// import Carousel from './components/Carousel';

// import DecorationsGrid from './components/DecorationsGrid';
// import CustomerStats from './components/CustomerStats';
// import MediaBrands from './components/MediaBrands';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar Component */}
//         <CustomNavbar />

//         {/* Carousel Component */}
//         <Carousel />

//         {/* Routes for different pages */}
//         {/* <DecorationsGrid /> */}
//         <Routes>
//           <Route path="/" element={<DecorationsGrid />} />

//         </Routes>


//         {/* Customer Stats and Media Brands Section */}
//         <div className="text-center py-12">
//           <h1 className="text-3xl font-bold text-gray-800 mb-8">
//             Helping many Customers remember Their Special Occasions
//           </h1>
//           <CustomerStats />
//           <MediaBrands />
//         </div>

//         {/* Footer Component */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CustomNavbar from './components/CustomNavbar';
// import Carousel from './components/Carousel';
// import DecorationsGrid from './components/DecorationsGrid';
// import PartyComponent from './components/PartyComponent';
// import BirthdayComponent from './components/BirthdayComponent';
// import CandlelightComponent from './components/CandlelightComponent';
// import PremiumComponent from './components/PremiumComponent';
// import AnniversaryComponent from './components/AnniversaryComponent';
// import FirstNightComponent from './components/FirstNightComponent';
// import KidsBirthdayComponent from './components/KidsBirthdayComponent';
// import BabyShowerComponent from './components/BabyShowerComponent';
// import BalloonBouquetsComponent from './components/BalloonBouquetsComponent';
// import CustomerStats from './components/CustomerStats';
// import MediaBrands from './components/MediaBrands';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar Component */}
//         <CustomNavbar />

//         {/* Carousel Component */}
//         <Carousel />

//         {/* Routes for different pages */}
//         <Routes>
//           {/* <Route path="/" element={<DecorationsGrid />} /> */}
//           <Route path="/SG_decorators" element={<DecorationsGrid />} />
//           <Route path="/party" element={<PartyComponent />} />
//           <Route path="/birthday" element={<BirthdayComponent />} />
//           <Route path="/candlelight" element={<CandlelightComponent />} />
//           <Route path="/premium" element={<PremiumComponent />} />
//           <Route path="/anniversary" element={<AnniversaryComponent />} />
//           <Route path="/first-night" element={<FirstNightComponent />} />
//           <Route path="/kids-birthday" element={<KidsBirthdayComponent />} />
//           <Route path="/baby-shower" element={<BabyShowerComponent />} />
//           <Route path="/balloon-bouquets" element={<BalloonBouquetsComponent />} />
//         </Routes>

//         {/* Customer Stats and Media Brands Section */}
//         <div className="text-center py-12">
//           <h1 className="text-3xl font-bold text-gray-800 mb-8">
//             Helping many Customers remember Their Special Occasions.hi
//           </h1>
//           <CustomerStats />
//           <MediaBrands />
//         </div>

//         {/* Footer Component */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CustomNavbar from './components/CustomNavbar';
// import Carousel from './components/Carousel';
// import DecorationsGrid from './components/DecorationsGrid';
// import PartyComponent from './components/PartyComponent';
// import BirthdayComponent from './components/BirthdayComponent';
// import CandlelightComponent from './components/CandlelightComponent';
// import PremiumComponent from './components/PremiumComponent';
// import AnniversaryComponent from './components/AnniversaryComponent';
// import FirstNightComponent from './components/FirstNightComponent';
// import KidsBirthdayComponent from './components/KidsBirthdayComponent';
// import BabyShowerComponent from './components/BabyShowerComponent';
// import BalloonBouquetsComponent from './components/BalloonBouquetsComponent';
// import CustomerStats from './components/CustomerStats';
// import MediaBrands from './components/MediaBrands';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <CustomNavbar />
//         <Carousel />

//         <Routes>
//           <Route path="/SG_decorators" element={<DecorationsGrid />} />
//           <Route path="/SG_decorators/party" element={<PartyComponent />} />
//           <Route path="/SG_decorators/birthday" element={<BirthdayComponent />} />
//           <Route path="/SG_decorators/candlelight" element={<CandlelightComponent />} />
//           <Route path="/SG_decorators/premium" element={<PremiumComponent />} />
//           <Route path="/SG_decorators/anniversary" element={<AnniversaryComponent />} />
//           <Route path="/SG_decorators/first-night" element={<FirstNightComponent />} />
//           <Route path="/SG_decorators/kids-birthday" element={<KidsBirthdayComponent />} />
//           <Route path="/SG_decorators/baby-shower" element={<BabyShowerComponent />} />
//           <Route path="/SG_decorators/balloon-bouquets" element={<BalloonBouquetsComponent />} />
//         </Routes>

//         <div className="text-center py-12">
//           <h1 className="text-3xl font-bold text-gray-800 mb-8">
//             Helped 5+ Million Customers Cherish Their Special Occasions
//           </h1>
//           <CustomerStats />
//           <MediaBrands />
//         </div>

//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/home/navbar/CustomNavbar';
import Carousel from './components/home/hero/Carousel';
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

const App = () => {
  return (
    <Router basename="/SG_decorators">
      <div className="App">
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
    </Router>
  );
};

export default App;
