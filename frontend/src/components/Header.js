import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i>{" "}
                <span className="ms-1">Cart</span>
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i>{" "}
                <span className="ms-1">Sign In</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
