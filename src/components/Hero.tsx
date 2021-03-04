import React, { useRef, useEffect, useState } from 'react';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import gsap, { Power2, TweenMax } from 'gsap';

import { desktopVw, fonts, letterSpacing } from '../styles';

const Hero = ({
  data: {
    title, image, backgroundText, image2, cases,
  },
}) => {
  const refCircle = useRef(null);
  const itemsRef = useRef([]);

  console.log(cases);

  const [tl] = useState(gsap.timeline({ paused: true, repeat: -1 }));

  useEffect(() => {
    tl.to(refCircle.current, 15, { strokeDashoffset: 1000, ease: Power2.easeInOut })
      .to(refCircle.current, 2, { strokeDashoffset: 0, ease: Power2.easeInOut });

    tl.play();
  }, []);

  return (
    <StyledHero>
      <Counter>
        <span>0</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="62.778" height="14.392" viewBox="0 0 62.778 14.392">
          <path id="Path_5" data-name="Path 5" d="M532.953-281.712s6.863,4.323,13.511,3.113,6.791-9.038,13.08-7.953,6.356,11.586,12.076,12.292,4.78-9.023,10.8-9.465c4.426-.325,12.112,6.484,12.112,6.484" transform="translate(-532.42 287.624)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2" />
        </svg>
        <span>6</span>
      </Counter>
      <Relative>
        <p>VIEW PROJECT</p>
        <StyledImage fluid={cases[0].image.fluid} />
        <StyledSvg ref={refCircle} viewBox="0 0 360 360">
          <path
            d="M180 20.0845
      a 150.9155 150.9155 0 0 1 0 310.831
      a 150.9155 150.9155 0 0 1 0 -310.831"
            fill="none"
            stroke="#fff"
            strokeWidth="4"
          />
        </StyledSvg>
      </Relative>
      <Title>
        MAILLE
        <br />
        FRANCEE
      </Title>
      <Footer>
        <p>VUGHT, NETHERLANDS</p>
        <p>NIELS.REIJNDERS1@GMAIL.COM</p>
      </Footer>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  color: #fff;
  position: relative;
  height: 100vh;
  font-family: ${fonts.poppins};
  font-weight: 600;
  font-size: ${desktopVw(15)};
  letter-spacing: ${letterSpacing(80)};
`;

const Title = styled.h1`
  font-size: ${desktopVw(240)};
  font-family: "Times sans serif";
  text-align: center;
  line-height: ${desktopVw(300)};
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
  width: ${desktopVw(630)};
  height: ${desktopVw(870)};
`;

const Counter = styled.p`
  top: ${desktopVw(65)};
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  width: ${desktopVw(110)};
  justify-content: space-between;

  svg {
    width: ${desktopVw(61)};
  }
`;

const StyledSvg = styled.svg`
  position: absolute;
  width: ${desktopVw(200)};
  bottom: ${desktopVw(-80)};
  right: ${desktopVw(-80)};
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  transform: rotate(-45deg);
`;

const Relative = styled.div`
  /* position: relative; */
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  p {
    position: absolute;
    left: ${desktopVw(-50)};
    bottom: 0;
    transform: rotate(-90deg);
    transform-origin: left bottom;
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

const Footer = styled.div`
  position: absolute;
  padding: ${desktopVw(65)} ${desktopVw(100)};
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  width: calc(100% - ${desktopVw(200)});
`;

const StyledImage = styled(Image)`
  width: ${desktopVw(545)};
  height: calc(100vh - ${desktopVw(240)});
`;

export default Hero;
