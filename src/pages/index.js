import React from "react"
import Layout from "../components/layouts/layout"
import Paralax from "../components/partials/paralax"
import Offer from "../components/partials/offer"
import Paralaxblog from "../components/partials/paralaxblog"
import { graphql } from "gatsby"
import logo from "../components/partials/logo_black.png"

import About from "../components/partials/about"
import Team from "../components/partials/team"

export default ({ data }) => {
  return (
    <Layout>
      <Paralax landing={"landing"} logo={logo} />
      <Offer />

      <Team />
      <About />
      <Paralaxblog />
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
