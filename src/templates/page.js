import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'

const page = (props, {
  location,
  data,
}) => {
  // const {
  //   seoTitle,
  // } = contentfulPage
console.log(props)

    return (
      <Layout location={location}>
        <h1>fejiofjse</h1>
      </Layout>
    )
  }


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
`

export default page
