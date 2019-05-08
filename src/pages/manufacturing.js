import React from "react"
import Layout from "../components/layouts/layout"
import Paralax from "../components/partials/paralax"
import Leadership from "../components/partials/leadership"
import Offer from "../components/partials/offer"
import { graphql } from "gatsby"
import logo from "../components/partials/logo_black.png"

export default ({ data }) => {
  return (
    <Layout>
      <Paralax landing="landingMan" logo={logo} />
      <Offer />
      <Leadership />
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
