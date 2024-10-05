// import React from 'react';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

// const CustomNavbar = () => {
//   return (
//     <Navbar bg="light" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand href="#home">Event Planner</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>

//             <NavDropdown title="Decoration" id="decoration-dropdown">
//               <NavDropdown.Item href="#marriage">Marriage</NavDropdown.Item>
//               <NavDropdown.Item href="#haldi">Haldi</NavDropdown.Item>
//               <NavDropdown.Item href="#birthday">Birthday</NavDropdown.Item>
//               <NavDropdown.Item href="#babyshower">Baby Shower</NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#contact">Contact Us</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };


// export default CustomNavbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaBirthdayCake, FaBaby, FaHeart, FaRing } from 'react-icons/fa'; // Icons for decoration items

const CustomNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Handle search functionality here
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-primary">
          SG Decorators
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="fw-semibold text-dark mx-2">
              Home
            </Nav.Link>

            <NavDropdown title="Decoration" id="decoration-dropdown" className="fw-semibold mx-2">
              <NavDropdown.Item href="#marriage" className="d-flex align-items-center">
                <FaRing className="me-2 text-warning" /> Marriage
              </NavDropdown.Item>
              <NavDropdown.Item href="#haldi" className="d-flex align-items-center">
                <FaHeart className="me-2 text-danger" /> Haldi
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/birthday" className="d-flex align-items-center">
        <FaBirthdayCake className="me-2 text-info" /> Birthday
           </NavDropdown.Item>
              <NavDropdown.Item href="#babyshower" className="d-flex align-items-center">
                <FaBaby className="me-2 text-success" /> Baby Shower
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#about" className="fw-semibold text-dark mx-2">
              About
            </Nav.Link>
          </Nav>

          {/* Search Form */}
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search for Events"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderRadius: '100px', width: '200px' }} // Adjust width as needed
            />
            <Button variant="outline-primary" type="submit" className="d-flex align-items-center" style={{ borderRadius: '20px', padding: '0.375rem 0.75rem' }}>
              <FaSearch className="me-1" style={{ fontSize: '1.25rem' }} /> {/* Adjust size as needed */}
            </Button>
          </Form>

          {/* Contact Us Button with Neon Glow */}
          <Nav.Link href="#contact" className="ms-3">
            <Button variant="outline-danger" className="neon-button rounded-pill px-4 py-2">
              Contact Us
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>

      {/* Custom CSS for Neon Glow Effect */}
      <style>{`
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

export default CustomNavbar;
