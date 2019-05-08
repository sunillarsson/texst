import React, { Component } from "react"

export default class about extends Component {
  render() {
    return (
      <div className="about bottom" id="about">
        <div className="white-text" id="container-text">
          <h2 className="center bottom-half top white-text">About us</h2>
          <div class="row">
            <div class="col s1 valign-wrapper add-height">
              <i class="small material-icons ">add</i>
            </div>
            <div class="col s10">
              {" "}
              <h6>
                <span className="bold">
                  Simonsson & Widerberg Lean Consulting AS
                </span>{" "}
                <br />
                Simonsson & Widerberg was founded 2012 in Storvik, Gildeskål,
                Norway and in Varekil, Orust, Sweden.
              </h6>
            </div>
          </div>
          <div class="row">
            <div class="col s1 valign-wrapper add-height">
              <i class="small material-icons ">accessibility</i>
            </div>
            <div class="col s10">
              {" "}
              <h6>
                We have international experience from working in many countries
                and different cultures: Belgium, Canada, Czech Republic,
                Denmark, France, Germany, Great Britain, Italy, Japan,
                Netherlands, Norway, Poland, Romania, Serbia, Slovakia, Spain,
                Sweden, US
              </h6>
            </div>
          </div>
          <div class="row">
            <div class="col s1 valign-wrapper add-height">
              <i class="small material-icons ">cloud_queue</i>
            </div>
            <div class="col s10">
              {" "}
              <h6>
                Simonsson & Widerberg supports companies to create as well as
                implement effective processes. This is done by reducing waste
                and improve the value stream. With a Lean System and Lean
                Leadership the company will free up resources that can be
                reinvested for later growth.
              </h6>
            </div>
          </div>
          <div class="row">
            <div class="col s1 valign-wrapper add-height">
              <i class="small material-icons ">cloud_queue</i>
            </div>
            <div class="col s10">
              {" "}
              <h6>
                Our vision is that good products and services shall be
                competetive on an international level.
              </h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
