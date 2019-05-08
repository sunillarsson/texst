import React from "react"
import Layout from "../components/layouts/layout"
import Blog from "../components/partials/blog"

export default () => {
  return (
    <Layout>
      <div className="container black-text link content-height">
        <Blog />
      </div>
    </Layout>
  )
}
