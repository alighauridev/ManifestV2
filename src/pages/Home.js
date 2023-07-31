import React, { useRef, useEffect } from 'react';
import createScrollSnap from 'scroll-snap';
import './styles.css';
import Banner from '../components/Banner';
import MoreInfo from '../components/MoreInfo';
import About from '../components/About';
import Mission from '../components/Mission';
import Team from "../components/Team";
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    // Check if the screen size is desktop (e.g., width >= 768px)
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    // Apply scroll snap behavior only in desktop mode
    if (isDesktop) {
      createScrollSnap(element, {
        snapDestinationY: '100%',
      }, () => console.log('snapped'));
    }
  }, []);

  return (
    <div id="container" ref={containerRef}>
      <Navigation />
      <div className="page first-page">
        <Banner />
      </div>
      <div className="page second-page">
        <MoreInfo />
      </div>
      <div className="page third-page">
        <About />
      </div>
      <div className="page fourth-page">
        <Mission />
      </div>
      <div className="page fourth-page">
        <Team />
      </div>
      <div className="page fourth-page">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
