import React from "react"
import Layout from "../components/layouts/layout"
import Paralax from "../components/partials/paralax"

import { graphql } from "gatsby"
import logo from "../components/partials/logo_black.png"

export default ({ data }) => {
  return (
    <Layout>
      <Paralax landing="landingStart" logo={logo} />
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
