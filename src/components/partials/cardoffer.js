import React, { Component } from "react"

export default class cardoffer extends Component {
  render() {
    return (
      <div>
        <div class="col l4 m12 s12 margin-half">
          <div className="promo center">
            <i className="material-icons large">{this.props.logo}</i>
            <h5 className="promo-caption">{this.props.title}</h5>
            <h6 className="light center">{this.props.text}</h6>
          </div>
          <a href={this.props.link} class="waves-effect waves-light btn orange">
            Read more
          </a>
        </div>
      </div>
    )
  }
}
