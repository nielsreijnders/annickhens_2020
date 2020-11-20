/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import Hero from '../components/hero';
import Layout from '../components/layout';
import {
  mobileVw,
  desktopVw,
  fonts,
  colors,
  desktopBreakpoint,
  letterSpacing,
} from '../styles/index';

const page = ({
  location,
  data,
}) => {
  const {
    seoTitle,
    sections,
  } = data.contentfulPage;

  const [swiper, updateSwiper] = useState(null);

  const params = {
    getSwiper: updateSwiper,
  };

  const [arr, setArr] = useState([]);
  const [selector, setSelector] = useState(1);

  const handleSubmit = (title) => {
    if (title) setArr([...arr, title]);
  };

  const handleRemove = (index) => {
    setArr(arr.filter((e, i) => (i !== index)));
  };

  const qauntinSelector = (qauntity) => {
    setSelector(qauntity);
  };

  console.log(arr);

  const arrToUp = String.prototype.toUpperCase.apply(arr).split(',');

  const goNext = () => {
    // console.log('giosfjei');

    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <Layout location={location}>
      {arr.length > 0 && (
      <Order>
        <ul>
          {arr.map((item, index) => (
            <li key={index}>

              {item}
              {' '}
              <span onClick={() => handleRemove(index)}><u>remove</u></span>
            </li>
          ))}
        </ul>
        <div>
          VERZENDING: &euro;1.50
          <br />
          <br />

        </div>
        <div>
          MINIMAAL 5 KAARTEN ✨🙂
          <br />
          <br />

        </div>
        <div>
          TOTAAL INC VERZENDING: &euro;
          {(Math.round(arr.length * 1.7 * 100) / 100 + 1.5).toFixed(2)}
        </div>
        <EmailButton href={`mailto:kerst4bosnie@gmail.com?subject=Bestelling&body=Hoi, ik zou graag dit willen bestellen: %0D%0A%0D%0A${arrToUp.join('%0D%0A')}%0D%0A%0D%0A TOTAAL INC VERZENDING: ${(Math.round(arr.length * 1.7 * 100) / 100 + 1.5).toFixed(2)} %0D%0A%0D Adres: (vul adres in)%0D%0A%0DGroettjeesss`}>verstuur mail</EmailButton>
      </Order>
      )}

      <BackgroundImage>
        <Bundle>
          <Title>
            𝙆𝙀𝙍𝙎𝙏𝙆𝘼𝘼𝙍𝙏𝙀𝙉
          </Title>
          <Description>
            Jaa voor dat je het weet is het alweer kerst 🎄🎅🏻

            Stuur elkaar een kaartje deze kerstperiode en steun het goede doel 😊

            Met een groep studenten gaan we volgend voorjaar 🤞🏻 naar Bosnië daar zullen wij in de zorg helpen en van elkaar leren.
            Alle opbrengst wordt gedoneerd aan stichting out of area!
            5 kaartjes voor €8.50
            Verzendkosten bedragen €1.50

            Wil je deze geweldige kaarten bestellen kan dat via kerst4bosnie@gmail.com

            Bestellen mogelijk tot 4 december!

            Voor meer informatie en vragen of vrijwillige bijdrage kun je mailtje sturen naar kerst4bosnie@gmail.com
          </Description>
        </Bundle>
        <Copy>BUILD IN 2H:37MIN BY NIELS</Copy>

      </BackgroundImage>

      <Container>
        {seoTitle === 'kerstkaarten' && sections && sections.map(({ title, images }) => (
          <>
            {images.map((item, index) => (
              <>
                {index > 0 && (
                  <Card>
                    <Overflow>
                      <StyledImage fluid={item.fluid} />
                      <Wrapper>
                        {/* <ButtonNext onClick={() => goNext()}>
                          <svg
                            width={15.707}
                            height={14.06}
                            viewBox="0 0 15.707 14.06"
                          >
                            <g
                              data-name="Group 32"
                              fill="none"
                              stroke="#000"
                              strokeMiterlimit={10}
                            >
                              <path data-name="Path 45" d="M8.324.354l6.677 6.677-6.677 6.677" />
                              <path data-name="Line 2" d="M15 7.03H0" />
                            </g>
                          </svg>
                        </ButtonNext>
                        <ButtonNext onClick={() => goPrev()}>
                          <svg
                            width={15.707}
                            height={14.06}
                            viewBox="0 0 15.707 14.06"
                          >
                            <g
                              data-name="Group 32"
                              fill="none"
                              stroke="#000"
                              strokeMiterlimit={10}
                            >
                              <path data-name="Path 45" d="M8.324.354l6.677 6.677-6.677 6.677" />
                              <path data-name="Line 2" d="M15 7.03H0" />
                            </g>
                          </svg>
                        </ButtonNext> */}
                      </Wrapper>

                    </Overflow>

                    <StyledTitle>
                      {title}
                      {' '}
                      #KAARTNUMMER
                      {index}

                      {' '}
                      &euro;1,70
                    </StyledTitle>
                    {/* <Qauntity>
              <div onClick={() => qauntinSelector(1)}>
                1x
              </div>
              <div onClick={() => qauntinSelector(5)}>
                5x
              </div>
            </Qauntity> */}

                    <Button onClick={() => handleSubmit(title += index)}>
                      Add to order
                      {' '}
                    </Button>
                  </Card>
                )}
              </>
            ))}

          </>
        ))}
      </Container>
    </Layout>
  );
};

const Copy = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  color: black;
  letter-spacing: 10px;
  text-align: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: ${letterSpacing(100)};
  text-align: center;
  margin: 0 0 ${mobileVw(20)};
  font-size: ${mobileVw(30)};


  @media (min-width: ${desktopBreakpoint}) {
    font-size: ${desktopVw(50)};

    margin: 0 0 ${desktopVw(25)};

  }
`;

const ButtonNext = styled.div`
  /* background: white; */
  padding: ${mobileVw(10)};
  background:  #f4f7fe;
  transform-origin: center center;

  @media (min-width: ${desktopBreakpoint}) {
    padding: ${desktopVw(20)};

  }
`;

const Wrapper = styled.div`
position: absolute;
bottom: 0;
right: 0;
z-index: 9;
display: flex;

div:first-child {
  svg {
    transform: rotate(-180deg);

  }
}
`;

const Bundle = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
`;

const transform = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Overflow = styled.div`
overflow: hidden;
width: 100%;
    position: relative;
`;

const Button = styled.button`
  /* color: blue; */
  text-transform: uppercase;
  background: white;
  padding: ${mobileVw(15)};
  width: fit-content;
  background: #dce6fc50;
  font-weight: bold;
  /* font-style: italic; */
  border: none;
  outline: none;
  margin: 0 0 ${mobileVw(10)} 0;
  cursor: pointer;

  @media (min-width: ${desktopBreakpoint}) {
    margin: 0 0 ${desktopVw(25)} 0;
    padding: ${desktopVw(15)};

  }
  `;

const EmailButton = styled.a`
  background: #dce6fc50;
  padding: ${mobileVw(15)};
  display: block;
  margin: ${mobileVw(20)} 0 0 0;

  @media (min-width: ${desktopBreakpoint}) {
    margin: ${desktopVw(20)} 0 0 0;
    padding: ${desktopVw(15)};

  }
`;

const Slider = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: 9;
animation: ${transform} 35s linear infinite;
width: 100%;

  div {
    display: flex;
    position: absolute;
    white-space: nowrap;
    background: white;
    /* width: 100%; */
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: ${letterSpacing(100)};

    &:last-child {
      left: 100%;
    }
  }

  span {
    display: inline-block;
    padding: 0 20px 0 0;
  }
`;

const BackgroundImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1511184150666-9bb7d41a88f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80");
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;
  background-size: cover;
  margin: 0 0 ${mobileVw(50)} 0;
  position: relative;

  @media (min-width: ${desktopBreakpoint}) {
    margin: 0 0 ${desktopVw(50)} 0;

  }
`;

const Order = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background: white;
  margin: ${mobileVw(10)};
  width: calc(100% - ${mobileVw(40)});
  padding: 10px;
  box-shadow: 0 0 4rem 0 #a1a1a150;
  padding: ${mobileVw(10)};
  z-index: 99;
  text-transform: uppercase;
  letter-spacing: ${letterSpacing(100)};
  font-weight: bold;

  @media (min-width: ${desktopBreakpoint}) {
    margin: ${desktopVw(50)};
    width: ${desktopVw(500)};
    padding: ${desktopVw(25)};

  }



  li {
    margin: 0 0 10px 0;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 0 ${desktopVw(50)};

    @media (min-width: ${desktopBreakpoint}) {
      grid-gap: 0 ${desktopVw(50)};

    }
  }

  ul {
    margin: 0 0 ${mobileVw(20)} 0;

    @media (min-width: ${desktopBreakpoint}) {
      margin: 0 0 ${desktopVw(25)} 0;

    }
  }

  span {
    cursor: pointer;
  }
`;

const Qauntity = styled.div`
  display: flex;
  
  div {
    padding: ${mobileVw(10)};
    background: white;
    margin: 0 ${mobileVw(10)} ${mobileVw(20)} 0;
    cursor: pointer;

    @media (min-width: ${desktopBreakpoint}) {
      padding: ${desktopVw(10)};
    margin: 0 ${desktopVw(10)} ${desktopVw(20)} 0;
    }
  }
`;

const Description = styled.h1`
  text-align: center;  
  width: ${mobileVw(300)};
  margin: 0 auto 0;
  letter-spacing: ${letterSpacing(20)};
  line-height:${mobileVw(20)};

  @media (min-width: ${desktopBreakpoint}) {
    width: ${desktopVw(550)};
    line-height:${desktopVw(20)};

  }
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  margin: ${mobileVw(20)} 0;
  font-weight: bold;
  letter-spacing: ${letterSpacing(100)};

  @media (min-width: ${desktopBreakpoint}) {
    margin: ${desktopVw(15)} 0;

  }
`;

const StyledImage = styled(Image)`
  /* width: ${desktopVw(100)}; */
  /* height: ${desktopVw(100)}; */
  /* display: inline-block; */
  /* display: block; */
  overflow: hidden;
`;

const Card = styled.div`
position: relative;
/* overflow: hidden; */
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  margin: 0 ${mobileVw(10)} ${mobileVw(200)};
  grid-gap: 25px 25px;
  /* width: 100%; */

  @media (min-width: ${desktopBreakpoint}) {
    margin: 0 ${desktopVw(200)} ${desktopVw(100)};
    grid-template-columns: 50% 50%;

  }

  .swiper-container {
    height: ${mobileVw(300)};
    overflow: hidden;

    @media (min-width: ${desktopBreakpoint}) {
      height: ${desktopVw(500)};

    }
  }
`;

export const pageQuery = graphql`
query pageQuery($id: String!) {
  contentfulPage(id: { eq: $id }) {
      seoTitle
      seoDescription
      sections {
        ... on ContentfulComponentHero {
          id
          image {
            fluid {
              src
            }
            title
          }
          title
        }
        ... on ContentfulComponentImageBlock {
          id
          name
          images {
            fluid {
              src
            }
          }
        }
        ... on ContentfulComponentBestelItem {
          id
          images {
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          title
        }
        ... on ContentfulComponentSlider {
          id
          name
          title
          images {
            fluid {
              src
            }
          }
        }
        ... on ContentfulComponentImageText {
          id
          name
          text {
            text
          }
          image {
            fluid {
              src
            }
          }
        }
      }
    
  }
}
`;

export default page;
