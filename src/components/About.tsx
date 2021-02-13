import React from 'react';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';

import { map } from 'lodash';
import {
  desktopBreakpoint, desktopVw, fonts, letterSpacing,
} from '../styles';

const About = ({
  data: {
    title, list, text, spin,
  },
}) => {
  console.log(text);
  return (
    <StyledAbout>
      <Title>{title}</Title>
      <StyledUl>
        {list.map((item) => <li>{item}</li>)}
      </StyledUl>
      <Spin>
        {[...Array(2)].map((item, index) => <div>{[...Array(2)].map((item, index) => <span>{spin}</span>)}</div>)}
      </Spin>
    </StyledAbout>
  );
};

const transform = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const StyledAbout = styled.div`
  /* color: #fff; */
  position: relative;
  margin: ${desktopVw(200)} ${desktopVw(100)} 0 ${desktopVw(100)};
  font-family: ${fonts.title};
  font-weight: 600;
  font-size: ${desktopVw(16)};
  letter-spacing: ${letterSpacing(80)};
`;

const Title = styled.h2`
  margin: 0 0 ${desktopVw(50)} 0;
  font-family: ${fonts.poppins};
  font-size: ${desktopVw(54)};
  letter-spacing: ${letterSpacing(70)};
  font-weight: 600;
  width: ${desktopVw(635)};
  line-height ${desktopVw(70)};
`;

const StyledUl = styled.ul`
  margin: 0;

  li {
    margin: 0 0 ${desktopVw(10)} 0;
  }
`;

const Spin = styled.div`
  width: ${desktopVw(635)};
  overflow: hidden;
  white-space: nowrap;
  margin: ${desktopVw(50)} 0 0;


  div {
    display: inline-block;
    @media (min-width: ${desktopBreakpoint}) {
      animation: ${transform} 20s linear infinite;
    }
    will-change: transform;
  }

  span {
    display: inline-block;
    margin: 0 ${desktopVw(15)};
  }
`;

export default About;
