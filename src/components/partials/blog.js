import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div className="top">
        <h1>I'm a blog</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} className="linkHover">
              {" "}
              <h4>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h4>
            </Link>{" "}
            <h6>{node.excerpt}</h6>
          </div>
        ))}
      </div>
    )}
  />
)
