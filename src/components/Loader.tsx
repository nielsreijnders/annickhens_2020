import React, { useRef, useEffect, useState } from 'react';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import gsap, { TweenMax, Power4 } from 'gsap';
import CountUp from 'react-countup';

import { desktopVw, fonts, letterSpacing } from '../styles';

const Loader = () => {
  const refContainer = useRef(null);
  const refLoader = useRef(null);
  const itemsRef = useRef([]);
  const refTitle = useRef(null);

  const [tl] = useState(gsap.timeline());

  useEffect(() => {
    tl.set(refTitle.current, { autoAlpha: 1 })
      .staggerTo(
        refTitle.current.children,
        1,
        {
          opacity: 0,
          yPercent: 30,
          skewY: 2,
          delay: 1.7,
          // ease: Power4.easeInOut,
        },
        0.01,
      )
      .to(refContainer.current, 2, {
        yPercent: 100,
        ease: Power4.easeInOut,
        onStart: () => {
          TweenMax.staggerFromTo('.stagger', 2, { y: -100, skewY: 3, opacity: 1 }, {
            delay: 0.6, y: 0, skewY: 0, opacity: 1,
          }, 0.1);
        },
      }, '=-.5').set(refLoader.current, { autoAlpha: 0 })
      .set('#___gatsby', { className: '+=active' }, '=-1.5');
    return () => {};
  }, []);

  const text = 'WECOULDBEHOMELESS';

  return (
    <StyledLoader ref={refLoader}>
      <LoaderContainer ref={refContainer} />
      <Title ref={refTitle}>
        {text.split('').map((letter) => <span>{letter}</span>)}
        {' '}
        <CountUp delay={1.2} start={2020} end={2001} duration={2} />
      </Title>
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* background: #fff; */
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderContainer = styled.div`
    background: #fff;
    height: 100vh;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const Title = styled.h1`
  font-size: ${desktopVw(16)};
  font-family: ${fonts.poppins};
  font-weight: bold;
  letter-spacing: ${letterSpacing(80)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  /* overflow: hidden; */

  span {
    display: inline-block;
  }
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

  div:first-child {
    margin: 0 0 ${desktopVw(0)} 0;
  }

  span {
    display: inline-block;
  }

  p {
    display: flex;
    justify-content: space-between;
    margin: ${desktopVw(120)} 0;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100vh;
`;

export default Loader;
