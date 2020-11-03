/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
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

  const params = {

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

  return (
    <Layout location={location}>
      {/* <Order /> */}
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
          &euro;
          {(Math.round(arr.length * 8.5 * 100) / 100).toFixed(2)}
        </div>
        <EmailButton href={`mailto:kerst4bosnie@gmail.com?subject=Bestelling&body=Hoi, ik zou graag dit willen bestellen: %0D%0A%0D%0A${arrToUp.join('%0D%0A')}%0D%0A%0D%0A Totaleprijs: ${(Math.round(arr.length * 8.5 * 100) / 100).toFixed(2)} %0D%0A%0D Adres: (vul adres in)%0D%0A%0DGroettjeesss`}>verstuur mail</EmailButton>
      </Order>
      <BackgroundImage />
      <Title>
        𝙆𝙀𝙍𝙎𝙏𝙆𝘼𝘼𝙍𝙏𝙀𝙉 ✨
      </Title>
      <Description>
        🌟jaa voor dat jet weet is het alweer kerst 🎄🎅🏻
        <br />
        <br />

        Stuur elkaar een kaartje deze kerstperiode en steun het goede doel 😊
        <br />
        <br />

        Met een groep studenten gaan we volgend voorjaar 🤞🏻 naar Bosnië daar zullen wij in de zorg helpen en van elkaar leren.
        Alle opbrengst wordt gedoneerd aan stichting out of area!
        5 kaartjes voor €8.50
        Je kunt kiezen uit deze toffe bundels hieronder
        Verzendkosten bedragen €1.50
        <br />
        <br />

        Wil je deze geweldige kaarten bestellen kan dat via kerst4bosnie@gmail.com
        Geef duidelijk aan welke bundel(s) je wil en je adres, wij doen de rest 😉
        <br />
        <br />

        Bestellen mogelijk tot 4 december!
        <br />
        <br />

        Voor meer informatie en vragen of vrijwillige bijdrage kun je mailtje sturen naar kerst4bosnie&gmail.com
      </Description>
      <Container>
        {seoTitle === 'kerstkaarten' && sections && sections.map(({ title, images }) => (
          <Card>
            <Overflow>
              <Slider>
                <div>
                  {[...Array(50)].map((index) => (
                    <span key={index}>
                      🎄
                      {' '}
                      🎅🏼
                      {/* {title} */}

                    </span>
                  ))}
                </div>
                <div>
                  {[...Array(50)].map((index) => (
                    <span key={index}>
                      🎄
                      {' '}
                      🎅🏼
                      {/* {title} */}

                    </span>
                  ))}
                </div>
              </Slider>
              <Swiper {...params}>
                {images.map((item) => (
                  <StyledImage fluid={item.fluid} />
                ))}
              </Swiper>
            </Overflow>

            <StyledTitle>
              {title}
              {' '}
              &euro;8,50
            </StyledTitle>
            {/* <Qauntity>
              <div onClick={() => qauntinSelector(1)}>
                1x
              </div>
              <div onClick={() => qauntinSelector(5)}>
                5x
              </div>
            </Qauntity> */}

            <Button onClick={() => handleSubmit(title)}>
              Add to delevery
            </Button>
          </Card>
        ))}
      </Container>
    </Layout>
  );
};

const Title = styled.h1`
  font-size: ${desktopVw(50)};
  text-transform: uppercase;
  letter-spacing: ${letterSpacing(100)};
  text-align: center;
  margin: ${desktopVw(200)} ${desktopVw(100)} ${desktopVw(25)};
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
  padding: ${desktopVw(15)};
  width: fit-content;
  background: #dce6fc50;
  font-weight: bold;
  /* font-style: italic; */
  border: none;
  outline: none;
  margin: 0 0 ${desktopVw(25)} 0;
  cursor: pointer;
  `;

const EmailButton = styled.a`
  background: #dce6fc50;
  padding: ${desktopVw(15)};
  display: block;
  margin: ${desktopVw(20)} 0 0 0;
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
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;
  background-size: cover;
`;

const Order = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background: white;
  margin: ${desktopVw(50)};
  width: ${desktopVw(500)}
  padding: 10px;
  box-shadow: 0 0 4rem 0 #a1a1a150;
  padding: ${desktopVw(25)};
  z-index: 99;
  text-transform: uppercase;
  letter-spacing: ${letterSpacing(100)};
  font-weight: bold;



  li {
    margin: 0 0 10px 0;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 0 ${desktopVw(50)};
  }

  ul {
    margin: 0 0 ${desktopVw(25)} 0;
  }

  span {
    cursor: pointer;
  }
`;

const Qauntity = styled.div`
  display: flex;
  
  div {
    padding: ${desktopVw(10)};
    background: white;
    margin: 0 ${desktopVw(10)} ${desktopVw(20)} 0;
    cursor: pointer;
  }
`;

const Description = styled.h1`
  text-align: center;  
  width: ${desktopVw(550)};
  margin: 0 auto ${desktopVw(300)};
  letter-spacing: ${letterSpacing(20)};
  line-height:${desktopVw(20)};
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  margin: ${desktopVw(15)} 0;
  font-weight: bold;
  letter-spacing: ${letterSpacing(100)};
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
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  margin: 0 ${desktopVw(200)} ${desktopVw(200)};
  grid-gap: 25px 25px;
  /* width: 100%; */

  .swiper-container {
    height: ${desktopVw(500)};
    overflow: hidden;
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
