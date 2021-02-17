import React, { useRef } from 'react';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import { TweenMax } from 'gsap';

import { desktopVw, fonts, letterSpacing } from '../styles';

const Hero = ({
  data: {
    title, image, backgroundText,
  },
}) => {
  const refContainer = useRef(null);
  const itemsRef = useRef([]);

  // const handleMouse = (e) => {
  //   console.log('HUHUHUHH');
  //   const x = itemsRef.current.map((item) => item);
  //   const z = x.map((item) => [...item.children]);
  //   [...z.flat()].map((item) => {
  //     const rect = item.getBoundingClientRect();
  //     const d = 30;
  //     const dx = e.clientX - rect.left;
  //     const dy = e.clientY - rect.top;
  //     const angle = Math.atan2(dy, dx);
  //     TweenMax.to(item, 0.95, {
  //       x: Math.cos(angle) * d, y: Math.sin(angle) * d, transformOrigin: '50% 50%', scale: 1,
  //     });
  //   });
  // };

  // const handleMouseOut = () => {
  //   const x = itemsRef.current.map((item) => item);
  //   const z = x.map((item) => [...item.children]);
  //   [...z.flat()].map((item) => {
  //     TweenMax.to(item, 0.96, { x: 0, y: 0 });
  //   });
  // };

  return (
    <StyledHero>
      <StyledImage fluid={image.fluid} />
      <div>
        {/* <Container onMouseLeave={(e) => handleMouseOut(e)} onMouseMove={(e) => handleMouse(e)} ref={refContainer}>
          {[...Array(2)].map((item, index1) => (
            <div key={index1}>
              {backgroundText.map((text, index2) => (
                <p ref={(el) => itemsRef.current[(index1 === 0 && index2 === 1) ? 3 : (index1 + index2)] = el}>
                  {text.split('').map((letter, index3) => (
                    <span>
                      {letter}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          ))}
        </Container> */}
        <Title>{title}</Title>
      </div>
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
  width: 60%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-family: 'poppins';
  font-size: ${desktopVw(14)};

  div:first-child {
    margin: 0 0 ${desktopVw(300)} 0;
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

export default Hero;
