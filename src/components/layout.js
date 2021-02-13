import React, { useEffect, useRef } from 'react';
import './base.css';
import { SmoothProvider } from 'react-smooth-scrolling';
import Container from './container';
import Navigation from './navigation';
import Footer from './Footer';

const Template = ({ children }) => {
  // window.document = {};

  // const section = useRef(null);

  useEffect(() => {
    // const smooth = new Smooth({
    //   native: true,
    //   section: section.current,
    //   ease: 0.1,
    // });

    // smooth.init();
  }, []);

  return (
    (typeof window !== 'undefined') && (
    <Container>
      <SmoothProvider ase={0.08} skew>
        <div className="smooth tf you looking at">
          <Navigation />
          {children}
          <Footer />
        </div>
      </SmoothProvider>
    </Container>
    )
  );
};

export default Template;
