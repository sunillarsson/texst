import React, { Component } from "react"

export default class cardBasic extends Component {
  openModal() {
    console.log("yo")
  }
  render() {
    return (
      <div className="link">
        <div className="cardbasic col s12 m6 l4 center">
          <a
            href={"#" + this.props.id}
            className="center linkHover modal-trigger"
          >
            <i class="center grey-darken-4 large material-icons ">
              {this.props.icon}
            </i>{" "}
            <br /> <h6 className="bold center">{this.props.title}</h6>
          </a>
        </div>

        <div id={this.props.id} class="modal">
          <div class="modal-content ">
            <h4>{this.props.title}</h4>
            <h6 className="left">{this.props.content}</h6>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close btn-flat">
              <i class="small material-icons">clear</i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
