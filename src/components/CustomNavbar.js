import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Event Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Decoration" id="decoration-dropdown">
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
