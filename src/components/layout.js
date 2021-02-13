import React, { useEffect } from 'react';
import './base.css';
import Smooth from 'smooth-scrolling';
import Container from './container';
import Navigation from './navigation';
import Footer from './Footer';

const Template = ({ children }) => {
  const section = document.querySelector('.vs-section');

  useEffect(() => {
    const smooth = new Smooth({
      native: false,
      section,
      ease: 0.05,
    });

    smooth.init();
  }, []);

  return (
    <Container>
      <div className="vs-section">
        <Navigation />
        {children}
        <Footer />
      </div>
    </Container>
  );
};

export default Template;
