import React, { useRef, useEffect } from 'react';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import { TweenMax } from 'gsap';

import { desktopVw, fonts, letterSpacing } from '../styles';

const Hero = ({
  data: {
    title, image, backgroundText, image2, cases,
  },
}) => {
  const refContainer = useRef(null);
  const itemsRef = useRef([]);

  console.log(cases);

  return (
    <StyledHero>
      <StyledImage fluid={image.fluid} />
      <Title>{title}</Title>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  color: #fff;
  position: relative;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: ${desktopVw(200)};
  font-family: "Times sans serif";
  /* font-style: italic; */
  /* font-weight: bold; */
  position: absolute;
  top: 50%;
  left: 50%;
  text-transform: uppercase;
  transform: translate(-50%,-50%);
  z-index: -1;
  /* transform: translate(-50%,-50%); */
`;

const StyledImage2 = styled(Image)`
  position: absolute !important;
  top: 50%;
  left: 50%;
  width: ${desktopVw(630)};
  height: ${desktopVw(870)};
  transform: translate(-50%,-50%);
`;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-family: 'poppins';
  font-size: ${desktopVw(14)};
  font-weight: 600;

  div:first-child {
    margin: 0 0 ${desktopVw(0)} 0;
  }

  span {
    display: inline-block;
  }

  p {
    display: flex;
    justify-content: space-between;
    margin: ${desktopVw(160)} 0;
  }
`;

const StyledImage = styled(Image)`
  width: ${desktopVw(545)};
  height: calc(100vh - ${desktopVw(240)});
  top: 50%;
  left: 50%;
  position: absolute; 
  transform: translate(-50%,-50%);
`;

export default Hero;
