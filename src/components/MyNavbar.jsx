import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const MyNavbar = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('token',"");
    navigate("/login")
  }

    return (
      <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand to="/" as={Link}>e-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/login" as={Link}>Login</Nav.Link>
            <Nav.Link to="/purchases" as={Link}>Purchases</Nav.Link>
            <Nav.Link href="#cart" as={Link}>Cart</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    );
};

export default MyNavbar;
