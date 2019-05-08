import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1> <p>Hey, I'm a skeleton.</p>
    <img
      src="https://gifimage.net/wp-content/uploads/2017/01/Dancing-Skeleton-GIF-Image-Download-25.gif"
      alt=""
    />
    <p>Spooked yah!</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
