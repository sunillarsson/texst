import React, { Component } from "react"

export default class card extends Component {
  render() {
    return (
      <div className="card hoverable">
        <div class="card-image">
          <img class="card-size activator" src={this.props.img} alt="" />
          <span class="card-title">
            <span className="fix-padding">
              {this.props.title}
              <br />
              <span className="subtitle">{this.props.subtitle}</span>
              <br />
              <a className="subtitle bold" href={this.props.resume}>
                My resume
              </a>
            </span>
            <a class="btn-floating card-btn right-align waves-light orange activator button-middle">
              <i class="material-icons">add</i>
            </a>
          </span>
        </div>

        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {this.props.title}

            <i class="material-icons right">close</i>
          </span>
          <a className="bold orange-link" href={this.props.resume}>
            My resume
          </a>
          <div className="top-half">
            <ul class="collapsible z-depth-0">
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">filter_drama</i>About me
                </div>
                <div class="collapsible-body">
                  <span>{this.props.about}</span>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">place</i> My expertise
                </div>
                <div class="collapsible-body">{this.props.expertise}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
