import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { SpanLogo } from './style';
import  './style.css';

export default function NavbarFunc() {
  return (
    <div style={{marginBottom: '70px'}}>
      <Navbar bg="dark" expand="lg" variant="dark" style={{padding: '10px'}} fixed='top'>
        <Container>
          <Link style={{fontSize: '30px'}} className='navbar-brand' to="/">New <SpanLogo>Event</SpanLogo></Link>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav style={{fontSize:'18px'}} className="ms-auto">
              <Link className='nav-link' to="/">Intro</Link>
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
