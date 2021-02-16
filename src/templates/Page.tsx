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

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   scroll.destroy();

  //   setTimeout(() => {
  //     scroll.init();
  //   }, 100);
  // });

  const scrollRef = React.createRef();

  return (
    <Layout location={location}>
      {sections.map((data: any, i: number, array: any) => {
        switch (data.__typename) {
          case 'ContentfulComponentHero':
            return <div data-scroll><Hero data={data} /></div>;
          case 'ContentfulComponentFeatured':
            return <div data-scroll><Featured data={data} /></div>;
          case 'ContentfulComponentAbout':
            return <div data-scroll><About data={data} /></div>;
          case 'ContentfulComponentBanner':
            return <div data-scroll><Banner data={data} /></div>;
          default:
            return null;
        }
      })}

    </Layout>
  );
};

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      slug
      sections {
        ... on ContentfulComponentBanner {
          id
          name
          image {
            fluid {
              src
            }
          }
          cases {
            image {
              fluid {
                src
              }
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
        }
        ... on ContentfulComponentAbout {
          id
          name
          list
          title
          spin
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
