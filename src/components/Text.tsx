import React, { useRef, useEffect } from 'react';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import { TweenMax } from 'gsap';

import { desktopVw, fonts, letterSpacing } from '../styles';

const Text = ({
  data: {
    description, image1, image2,
  },
}) => {
  console.log(description);

  return (
    <StyledText>
      <StyledImage1 fluid={image1.fluid} />
      <Wrapper>
        <div>
          <StyledImage2 fluid={image1.fluid} />
          <Description>{description.description}</Description>
        </div>
      </Wrapper>
      {/* <Title>efijof</Title> */}
    </StyledText>
  );
};

const StyledText = styled.div`
  color: #000;
  position: relative;
  display: flex;
`;

const Title = styled.h1`
  font-size: ${desktopVw(200)};
  font-family: "Times sans serif";
  /* font-style: italic; */
  /* font-weight: bold; */
  letter-spacing: ${letterSpacing(200)};
  position: absolute;
  bottom: 0%;
  left: 0%;
  /* transform: translate(-50%,-50%); */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const StyledImage1 = styled(Image)`
  width: 50%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
`;

const StyledImage2 = styled(Image)`
  width: ${desktopVw(300)};
  height: ${desktopVw(300)};
  position: relative;
  top: 0;
  left: 0;
  margin: 0 auto ${desktopVw(50)};
  display: block;
`;

const Description = styled.p`
  position: relative;
  width: ${desktopVw(670)};
  text-align: center;
  letter-spacing: ${letterSpacing(80)};x
  font-family: ${fonts.title};
  text-transform: uppercase;
  font-size: ${desktopVw(16)};
  font-weight: 600;
  line-height: ${desktopVw(30)};
`;

export default Text;
