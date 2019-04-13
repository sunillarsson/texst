import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      {/* Placeholder navigation. Build a better one. Add a css framework or something */}
      <Link to={`/`}>Home</Link>
      <Link to={`/about/`}>About</Link>
      <Link to={`/blog/`}>Blog</Link>
    </div>
  )
}
