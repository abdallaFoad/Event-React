import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SpanLogo } from './style';

export default function NavbarFunc() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" style={{padding: '20px'}} fixed='top'>
        <Container>
          <Navbar.Brand href="#home">New <SpanLogo>Event</SpanLogo></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Intro</Nav.Link>
              <Nav.Link href="#features">OverView</Nav.Link>
              <Nav.Link href="#Speakers">Speakers</Nav.Link>
              <Nav.Link href="#Programs">Programs</Nav.Link>
              <Nav.Link href="#Register">Register</Nav.Link>
              <Nav.Link href="#Venue">Venue</Nav.Link>
              <Nav.Link href="#Sponsors">Sponsors</Nav.Link>
              <Nav.Link href="#Contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
