import { Link } from "gatsby"
import M from "materialize-css"
import React, { Component } from "react"

export default class nav extends Component {
  componentDidMount() {
    M.AutoInit()
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            <Link
              to={"_blank"}
              data-target="mobile-demo"
              className="sidenav-trigger black-text"
            >
              <i className="small material-icons">menu</i>
            </Link>
          </ul>
        </div>

        <ul id="mobile-demo" class="sidenav">
          <li class="bold">
            <Link className="sidenav-close" to={"/"}>
              Home
            </Link>
          </li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li class="bold">
                <a class="collapsible-header  ">
                  Offers{" "}
                  <span className="navbutton">
                    <i className="tiny right material-icons">arrow_drop_down</i>
                  </span>
                </a>{" "}
                <div class="collapsible-body">
                  <ul>
                    <li>
                      <Link className="sidenav-close" to={"/manufacturing/"}>
                        Lean Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link className="sidenav-close" to={"/startup/"}>
                        Lean Startup
                      </Link>
                    </li>
                    <li>
                      <Link className="sidenav-close" to={"/simulations/"}>
                        Lean Simulations
                      </Link>
                    </li>
                  </ul>
                </div>
                <li class="bold">
                  <Link to={"/blog/"} class="waves-effect sidenav-close">
                    Blog
                  </Link>
                </li>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
