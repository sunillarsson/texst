import React from "react"
import Layout from "../components/layouts/layout"
import Paralax from "../components/partials/paralax"
import Offer from "../components/partials/offer"
import Simulations from "../components/partials/simulations"
import { graphql } from "gatsby"
import logo from "../components/partials/logo_black.png"

export default ({ data }) => {
  return (
    <Layout>
      <Paralax landing="landingSim" logo={logo} />
      <Offer />
      <Simulations />
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
