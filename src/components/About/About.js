import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
// About component
const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About section of the site.</p>
      <Link />
      <Router>
        <Route></Route>
        <Routes></Routes>
      </Router>
    </div>
  );
};

export default About;