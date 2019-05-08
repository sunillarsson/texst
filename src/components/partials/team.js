import React, { Component } from "react"
import M from "materialize-css"

import Card from "./card"
import Results from "./results"
import img_r from "./img_r.jpg"
import img_u from "./img_u.jpg"
import img_l from "./img_l.jpg"

export default class team extends Component {
  componentDidMount() {
    M.AutoInit()
  }
  render() {
    return (
      <div className="team bottom">
        <div className="container top">
          <div className="row">
            <div className="col l4 m6 s12">
              <Card
                img={img_r}
                title={"Ronny Widerberg"}
                subtitle={"Founder, senior consultant"}
                about={
                  "Ronny has 25 years of experience implementing Lean production on an international level. Both working in companies and as a consultant. He has experience from many different positions within the industry; as an operator, team leader, production manager, quality manager, development manager, senior Lean Change Manager as well as being a Lean consultant process-, steel-, food-, automotive- and energy industry."
                }
                expertise={
                  <ul>
                    <li>
                      <strong>Ronnys areas of expertise are:</strong>
                    </li>
                    <li>Lean Leadership</li>
                    <li>Production systems&nbsp;– Build up/Development</li>
                    <li>5S</li>
                    <li>Performance Management</li>
                    <li>Standardized work</li>
                    <li>SMED – Single Minute Exchange of Dies</li>
                    <li>Autonomous operator maintenance</li>
                    <li>Levelling</li>
                    <li>Problem solving – A3</li>
                    <li>Kaizen – continuous improvement</li>
                    <li>TPM – Total Productive Mainteneance</li>
                  </ul>
                }
                resume={"/my-resume-r"}
              />
            </div>
            <div className="col l4 m6 s12">
              <Card
                img={img_u}
                title={"Ulla Simonsson"}
                about={
                  "Ulla has 25 years of experience implementing Lean production in the value chain on an international level. She has experience from many different positions within the industry; as a customer coordinator, Quality manager, Production manager as well as being a Supply Chain Manager within the food, automotive and energy industry. Ulla is Certified Scrum Master."
                }
                subtitle={"Founder, senior consultant"}
                resume={"/my-resume-u"}
                expertise={
                  <ul>
                    <li>
                      <strong>Ullas areas of expertise are:</strong>
                    </li>
                    <li>Lean&nbsp;Leadership</li>
                    <li>Team organization</li>
                    <li>5S</li>
                    <li>Performance Management</li>
                    <li>Standardized work</li>
                    <li>Levelling</li>
                    <li>Warehouse optimization and inventory reduction</li>
                    <li>Value stream mapping</li>
                    <li>Kaizen – continuous improvement</li>
                    <li>Problem solving – A3</li>
                  </ul>
                }
              />
            </div>
            <div className="col l4 m6 s12">
              <Card
                img={img_l}
                title={"Linus Larsson"}
                subtitle={"Consultant"}
                resume={"/my-resume-l"}
              />
            </div>
          </div>
        </div>
        <div id="container-text">
          <Results />
        </div>
      </div>
    )
  }
}
