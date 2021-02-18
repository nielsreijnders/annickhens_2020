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
          <StyledImage2 fluid={image2.fluid} />
          <Description>{description.description}</Description>
        </div>
      </Wrapper>
    </StyledText>
  );
};

const StyledText = styled.div`
  color: #000;
  position: relative;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const StyledImage1 = styled(Image)`
  width: 50%;
  height: ${desktopVw(1200)};
  position: relative;
  top: 0;
  left: 0;
`;

const StyledImage2 = styled(Image)`
  width: ${desktopVw(250)};
  height: ${desktopVw(250)};
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
  letter-spacing: ${letterSpacing(80)};
  font-family: ${fonts.title};
  text-transform: uppercase;
  font-size: ${desktopVw(16)};
  font-weight: 600;
  line-height: ${desktopVw(30)};
`;

export default Text;
