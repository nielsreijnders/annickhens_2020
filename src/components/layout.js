import React from 'react';
import './base.css';
import Container from './container';
import Navigation from './navigation';
import Footer from './Footer';

const Template = ({ children }) => (
  <Container>
    <Navigation />
    {children}
    <Footer />
  </Container>
);

export default Template;
