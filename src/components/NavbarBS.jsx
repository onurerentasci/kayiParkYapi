import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo2.png";
import "../styles/Navbar.css";

function NavbarBS() {
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        style={{
          fontFamily: "PT Sans, sans-serif",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Container style={{ minHeight: "100px" }}>
          <Navbar.Brand href="#anasayfa" className="navbar-brand">
            <img src={logo} style={{ height: "60px", cursor: "pointer" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#anasayfa">Anasayfa</Nav.Link>
              <Nav.Link href="#projeler">Projeler</Nav.Link>
              <Nav.Link href="#iletisim">Bize Ulaşın</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBS;
