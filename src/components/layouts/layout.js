import React from "react"
import Nav from "../partials/nav"
import { Helmet } from "react-helmet"
import "./style.css"

export default ({ children }) => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="container">
        <Nav />
      </div>
      <div>{children}</div>
    </div>
  )
}
