import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaBirthdayCake, FaBaby, FaHeart, FaRing } from 'react-icons/fa'; // Icons for decoration items

const Bar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Handle search functionality here
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm" style={{ padding: '0.2rem 1rem' }}>
      <Container fluid> {/* Use fluid container for better responsiveness */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <p className='py-2 my-2' ><b>Price ₹ 2900</b></p>
          <Nav.Link href="#Booknow" className="ms-3 mt-2 mt-lg-0">
            <Button variant="outline-danger" className="neon-button rounded-pill px-4 py-2">
              Book Now
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>

      {/* Custom CSS for Neon Glow Effect */}
      <style>{`
        @media (max-width: 576px) {
          .navbar-brand {
            font-size: 1.25rem; /* Adjust font size for smaller screens */
          }
          .neon-button {
            padding: 0.5rem 1rem; /* Adjust padding for smaller screens */
          }
        }

        .neon-button {
          position: relative; 
          color: #ff4757; /* Text color */
          overflow: hidden; 
          z-index: 1; /* Ensures button is above neon effect */
        }
        .neon-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 25px; /* Match button's border radius */
          background: transparent; /* No background color */
          box-shadow: 0 0 10px #ff4757, 0 0 20px #ff4757, 0 0 30px #ff4757; /* Glow effect */
          z-index: -1; /* Behind the button */
          animation: glow-animation 1.5s infinite alternate; /* Animation for glowing */
        }
        @keyframes glow-animation {
          0% {
            box-shadow: 0 0 10px #ff4757, 0 0 20px #ff4757, 0 0 30px #ff4757; /* Initial glow */
          }
          100% {
            box-shadow: 0 0 20px #ff4757, 0 0 30px #ff4757, 0 0 40px #ff4757; /* Increased glow */
          }
        }
      `}</style>
    </Navbar>
  );
};

export default Bar;
