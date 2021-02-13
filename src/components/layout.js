import React, { useEffect, useRef } from 'react';
import './base.css';
import Smooth from 'smooth-scrolling';
import Container from './container';
import Navigation from './navigation';
import Footer from './Footer';

const Template = ({ children }) => {
  const section = useRef(null);

  useEffect(() => {
    const smooth = new Smooth({
      native: true,
      section: section.current,
      ease: 0.1,
    });

    smooth.init();
  }, []);

  return (
    <Container>
      <div ref={section} className="vs-section">
        <Navigation />
        {children}
        <Footer />
      </div>
    </Container>
  );
};

export default Template;
