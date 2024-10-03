//tilak link
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CustomNavbar from './components/CustomNavbar';
import Carousel from './components/Carousel';

//adarsh link
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DecorationsGrid from './components/DecorationsGrid';
import PartyComponent from './components/PartyComponent';
import BirthdayComponent from './components/BirthdayComponent';
import CandlelightComponent from './components/CandlelightComponent';
import PremiumComponent from './components/PremiumComponent';
import AnniversaryComponent from './components/AnniversaryComponent';
import FirstNightComponent from './components/FirstNightComponent';
import KidsBirthdayComponent from './components/KidsBirthdayComponent';
import BabyShowerComponent from './components/BabyShowerComponent';
import BalloonBouquetsComponent from './components/BalloonBouquetsComponent';
import CustomerStats from './components/CustomerStats';
import MediaBrands from './components/MediaBrands';
import Footer from './components/Footer';

//tilak 
// function App() {
//   return (
//     <div className="App">
//       <CustomNavbar />
//       <Carousel />
//       <p>this is adarsh</p>
//     </div>
//   );
// }

// export default App;

//adarsh
const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Carousel />

      </div>
      <div>
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

        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Helping many Customers remember Their Special Occasions
          </h1>
          <CustomerStats />
          <MediaBrands />
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
