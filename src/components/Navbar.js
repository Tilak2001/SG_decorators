import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  // State to control the dropdown visibility
  const [showDecorationDropdown, setShowDecorationDropdown] = useState(false);

  // Toggle function to control the dropdown
  const toggleDecorationDropdown = () => {
    setShowDecorationDropdown(!showDecorationDropdown);
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Event Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            {/* Dropdown for Decoration - Click to Toggle */}
            <NavDropdown
              title="Decoration"
              id="decoration-dropdown"
              show={showDecorationDropdown}
              onClick={toggleDecorationDropdown}
            >
              <NavDropdown.Item href="#marriage">Marriage</NavDropdown.Item>
              <NavDropdown.Item href="#haldi">Haldi</NavDropdown.Item>
              <NavDropdown.Item href="#birthday">Birthday</NavDropdown.Item>
              <NavDropdown.Item href="#babyshower">Baby Shower</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
