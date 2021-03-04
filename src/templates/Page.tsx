import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Image from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import LocomotiveScroll from 'locomotive-scroll';
import Hero from '../components/Hero';
import About from '../components/About';
import Banner from '../components/Banner';
import Text from '../components/Text';
import Featured from '../components/Featured';
import Layout from '../components/layout';
import {
  mobileVw,
  desktopVw,
  fonts,
  colors,
  desktopBreakpoint,
  letterSpacing,
} from '../styles/index';

const Page = ({
  location,
  data: {
    contentfulPage: {
      sections,
    },
  },
}) => {
  console.log(sections);

  return (
    <>
      {sections.map((data: any, i: number, array: any) => {
        switch (data.__typename) {
          case 'ContentfulComponentHero':
            return <Hero data={data} />;
          // case 'ContentfulComponentFeatured':
          //   return <Featured data={data} />;
          // case 'ContentfulComponentAbout':
          //   return <About data={data} />;
          // case 'ContentfulComponentBanner':
          //   return <Banner data={data} />;
          // case 'ContentfulComponentAboutPage':
          //   return <Text data={data} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      slug
      sections {
        ... on ContentfulComponentAboutPage {
          id
          name
          description {
            description
          }
          image1 {
            fluid(maxWidth: 2600) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          image2 {
            fluid(maxWidth: 2600) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
        ... on ContentfulComponentHero {
          id
          title
          backgroundText
          image {
            fluid(maxWidth: 2600) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          image2 {
            fluid(maxWidth: 2600) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          cases {
            image {
              fluid(maxWidth: 2600) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
              title
            }
            title
          }
        }
        ... on ContentfulComponentFeatured {
          id
          name
          title
          text
          cases {
            image {
              fluid {
                src
              }
              title
            }
            title
          }
          secondCases {
            title
            image {
              title
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default Page;
