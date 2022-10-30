import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarFunc from './components/Navbar/Navbar';
import Header from './components/Header';
import About from './components/About/About';

export default function Home() {
  return (
    <div>
      <NavbarFunc />
      <Header />
      <About />
    </div>
  )
}
