import React, { Component } from "react"

export default class modal extends Component {
  render() {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>{this.props.title}</h4>
          <p>{this.props.content}</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close btn-flat">
            <i class="small material-icons">clear</i>
          </a>
        </div>
      </div>
    )
  }
}
