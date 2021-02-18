import React, { useEffect, useRef } from 'react';
import './base.css';
import Container from './container';
import Navigation from './navigation';
import Footer from './Footer';
import Scroll from './locomotiveScroll';
import './locomotive-scroll.css';
import Loader from './Loader';

const Template = ({ children, location }) => {
  console.log(location);

  return (
    <>
      <Scroll callbacks={location} />
      <Container>
        <div data-scroll-section>
          <div data-scroll>
            <Navigation />
            {children}
            <Footer />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Template;
