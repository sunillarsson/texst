import React from "react"
import Nav from "../partials/nav"

export default ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
