import React from 'react';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';

import { map } from 'lodash';
import { desktopVw, fonts, letterSpacing } from '../styles';

const Featured = ({
  data: {
    title, cases, text, secondCases,
  },
}) => {
  console.log(text);
  return (
    <StyledFeatured>
      {/* <StyledImage fluid={image.fluid} /> */}
      <Title>{title}</Title>
      <Wrapper>
        {cases.map(({ title, image }) => (
          <Container>
            <StyledImage fluid={image.fluid} />
            <CaseTitle>
              {title}
            </CaseTitle>
          </Container>
        ))}
      </Wrapper>
      <Subtitle>
        {text}
      </Subtitle>
      <WrapperCases>
        {secondCases.map(({ title, image }, index) => (
          <ContainerCases>
            <StyledImage fluid={image.fluid} />
            {index === 0 && (<p>VIEW PROJECT</p>)}
          </ContainerCases>
        ))}
      </WrapperCases>
      {/* <Container>
        {[...Array(2)].map((item, index) => <div key={index}>{backgroundText.map((text) => <p>{text.split('').map((letter) => <span>{letter}</span>)}</p>)}</div>)}
      </Container> */}
    </StyledFeatured>
  );
};

const StyledFeatured = styled.div`
  /* color: #fff; */
  position: relative;
`;

const Title = styled.h1`
  margin: ${desktopVw(200)} 0 ${desktopVw(200)} ${desktopVw(100)};
  font-family: ${fonts.poppins};
  font-size: ${desktopVw(54)};
  letter-spacing: ${letterSpacing(70)};
  font-weight: 600;
  width: ${desktopVw(315)};
  line-height ${desktopVw(70)};
`;

const Subtitle = styled.h6`
  margin: ${desktopVw(200)} 0 ${desktopVw(200)} ${desktopVw(100)};
  font-size: ${desktopVw(44)};
  letter-spacing: ${letterSpacing(70)};
`;

const Container = styled.div`
  width: 50%;
  height: ${desktopVw(1080)};
  position: relative;
`;

const Wrapper = styled.div`  
  display: flex;
  font-family: ${fonts.title};
  font-size: ${desktopVw(16)};
  letter-spacing: ${letterSpacing(80)};
  color: #fff;
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const CaseTitle = styled.h5`
  position: absolute;
  top: ${desktopVw(100)};
  left: ${desktopVw(100)};
`;

const WrapperCases = styled.div`
  margin: 0 ${desktopVw(100)};
  display: grid;
  grid-template-columns: ${desktopVw(640)} ${desktopVw(860)};
  /* grid-gap: 0 ${desktopVw(240)}; */
  justify-content: space-between;
`;

const ContainerCases = styled.div`
  height: ${desktopVw(700)};

  &:last-child {
    height: ${desktopVw(1125)};
  }

  p {
    font-family: ${fonts.title};
    font-size: ${desktopVw(16)};
    font-weight: 600;
    margin: ${desktopVw(35)} 0 0 0;
    letter-spacing: ${letterSpacing(80)};
  }

  position: relative;
`;

export default Featured;
