import React from "react"
import Layout from "../components/layouts/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>Hello, I'm a very skeletal gatsby-based minimal blog. </p>
        <p>As you can see I'm completely devoid of style. </p>
        <p>Yes, I'm your blank canvas. Make me your own!</p>
        <img
          src="https://gifimage.net/wp-content/uploads/2017/01/Dancing-Skeleton-GIF-Image-Download-5.gif"
          alt=""
        />
        <p>Very spooky indeed.</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
