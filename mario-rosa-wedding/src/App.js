import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Parents from './components/Parents';
import EventDetails from './components/EventDetails';
import GiftInfo from './components/GiftInfo';
import Hotels from './components/Hotels';
import FAQ from './components/FAQ';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Parents />
              <EventDetails />
              <GiftInfo />
              <Hotels />
              <FAQ />
              <RSVP />
              <Gallery />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
