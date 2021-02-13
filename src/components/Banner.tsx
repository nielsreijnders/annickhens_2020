import React from 'react';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';

import {
  desktopBreakpoint, desktopVw, fonts, letterSpacing,
} from '../styles';

const Banner = ({
  data: {
    title, image, cases,
  },
}) => {
  console.log(title);
  return (
    <StyledBanner>
      <StyledImage fluid={image.fluid} />
      {/* <Title>{title}</Title> */}
      {/* {cases.map(({ image }) => <StyledImage fluid={image.fluid} />)} */}
      <First fluid={cases[0].image.fluid} />
      <Second fluid={cases[1].image.fluid} />
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  color: #fff;
  position: relative;
  margin: ${desktopVw(200)} 0 0 0;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: ${desktopVw(1505)};
`;

const First = styled(Image)`
  width: ${desktopVw(860)};
  height: ${desktopVw(460)};
  position: absolute !important;
  top: ${desktopVw(200)};
  right: ${desktopVw(100)};
`;

const Second = styled(Image)`
  width: ${desktopVw(635)};
  height: ${desktopVw(800)};
  position: absolute !important;
  top: ${desktopVw(500)};
  left: ${desktopVw(100)};
`;

export default Banner;
