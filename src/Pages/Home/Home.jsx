import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarFunc from './components/Navbar/Navbar';
import Header from './components/Header';
import About from './components/About/About';
import OverViewComponent from './components/OverView/OverViewComponent';
import WatchVideo from './components/WatchVideo';
import CreativeSpeakers from './components/CreativeSpeakers';
import OurPrograms from './components/OurPrograms';
import Register from './components/RegisterHere/Register';

export default function Home() {
  return (
    <div>
      <NavbarFunc />
      <Header />
      <About />
      <OverViewComponent />
      <WatchVideo />
      <CreativeSpeakers />
      <OurPrograms />
      <Register />
    </div>
  )
}
