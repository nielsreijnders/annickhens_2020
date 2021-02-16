import React, { useEffect, useRef } from 'react';
import './base.css';
import { SmoothProvider } from 'react-smooth-scrolling';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import LocomotiveScroll from 'locomotive-scroll';
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

  // const ref = useRef<Parallax>();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      speed: -1,
    });
  });

  const scrollRef = React.createRef();

  return (
    (typeof window !== 'undefined') && (
      <Container>
        <div className="smooth">
          <div ref={scrollRef} className="scroll">
            <Navigation />
            {children}
            <Footer />
          </div>
        </div>
      </Container>
    )
  );
};

export default Template;
