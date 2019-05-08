import React, { Component } from "react"
import Blog from "./blog"

export default class nav extends Component {
  render() {
    return (
      <div>
        <div id="landingMiddle">
          <div className="color-overlay">
            <div id="paralaxText" />
            <div id="container-text" className="white-text linkInline">
              <Blog />
              <div className="top-half">
                <a class="waves-effect waves-light btn orange ">button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
