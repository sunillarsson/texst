import React, { Component } from "react"

export default class nav extends Component {
  render() {
    return (
      <div id="home">
        <div class="section center" id={this.props.landing}>
          <h1 class="center" id="mainText">
            <img className="logo" src={this.props.logo} alt="" />
          </h1>
          <div class="black-text" id="paralaxText">
            <a
              href="#about"
              class="btn-floating btn-large waves-effect waves-light orange"
            >
              <i class="material-icons">arrow_downward</i>
            </a>
          </div>
        </div>

        <div class="fixed-action-btn hide-on-med-and-down">
          <a href="#home" class="up-btn btn-floating btn-medium z-depth-1 grey">
            <i class="large material-icons">arrow_drop_up</i>
          </a>
        </div>
      </div>
    )
  }
}
