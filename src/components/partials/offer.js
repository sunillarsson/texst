import React, { Component } from "react"
import Cardoffer from "./cardoffer"
export default class offer extends Component {
  render() {
    return (
      <div className="offer top bottom center">
        <div class="row container">
          <Cardoffer
            logo={"settings"}
            title={"Lean manufacturing"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quia maiores provident molestias veritatis nam doloremque alias, omnis distinctio natus suscipit laborum recusandae exercitationem, quos earum in ut repellat vero."
            }
            link={"/manufacturing"}
          />
          <Cardoffer
            logo={"flash_on"}
            title={"Lean startup"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quia maiores provident molestias veritatis nam doloremque alias, omnis distinctio natus suscipit laborum recusandae exercitationem, quos earum in ut repellat vero."
            }
            link={"/startup"}
          />
          <Cardoffer
            logo={"group"}
            title={"Lean simulations"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quia maiores provident molestias veritatis nam doloremque alias, omnis distinctio natus suscipit laborum recusandae exercitationem, quos earum in ut repellat vero."
            }
            link={"/simulations"}
          />
        </div>
      </div>
    )
  }
}
