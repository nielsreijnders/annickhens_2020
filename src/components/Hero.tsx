import React from 'react';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';

import { desktopVw, fonts, letterSpacing } from '../styles';

const Hero = ({
  data: {
    title, image, backgroundText,
  },
}) => {
  console.log(title);
  return (
    <StyledHero>
      <StyledImage fluid={image.fluid} />
      {/* <Title>{title}</Title> */}
      <Container>
        {[...Array(2)].map((item, index) => <div key={index}>{backgroundText.map((text) => <p>{text.split('').map((letter) => <span>{letter}</span>)}</p>)}</div>)}
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  color: #fff;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${desktopVw(58)};
  font-family: ${fonts.title};
  font-style: italic;
  font-weight: bold;
  letter-spacing: ${letterSpacing(400)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-family: 'poppins';
  font-size: ${desktopVw(12)};

  div:first-child {
    /* margin: 0 0 ${desktopVw(300)} 0; */
  }

  p {
    display: flex;
    justify-content: space-between;
    margin: ${desktopVw(180)} 0;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100vh;
`;

export default Hero;
