import React from 'react';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';

import { map } from 'lodash';
import {
  desktopBreakpoint, desktopVw, fonts, letterSpacing,
} from '../styles';

const Footer = () => (
  <StyledFooter>
    <Container>
      <ul>
        <li>HELAAS IS NIKS VOOR ALTIJD</li>
        <li>NIELS.REIJNDERS1@GMAIL.COM</li>
        <li>VUGHT, NEDERLAND</li>
        <li>STUUR FF EEN BERICHTIE VOOR TELEFOON</li>
      </ul>
      <ul>
        <li>GITHUB</li>
        <li>STACKOVERFLOW</li>
        <li>AWWWARDS</li>
        <li>DRIBBLE</li>
      </ul>
    </Container>
  </StyledFooter>
);

const StyledFooter = styled.div`
  color: #fff;
  background: #000;
  font-family: ${fonts.title};
  font-size: ${desktopVw(16)};
  letter-spacing: ${letterSpacing(80)};
  font-weight: 600;
`;

const Container = styled.div`
  padding: ${desktopVw(200)} ${desktopVw(100)};
  display: flex;

  ul {
    margin: 0 ${desktopVw(200)} 0 0;
    display: block;

    li {
      margin: 0 0 ${desktopVw(15)} 0;
    }
  }
`;

export default Footer;
