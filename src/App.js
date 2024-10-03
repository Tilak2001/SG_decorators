import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CustomNavbar from './components/CustomNavbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Carousel />
      <p>this is adarsh</p>
    </div>
  );
}

export default App;
