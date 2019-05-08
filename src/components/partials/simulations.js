import React, { Component } from "react"

export default class leadership extends Component {
  render() {
    return (
      <div
        className="top leadership bottom grey-text text-darken-4"
        id="text-container about"
      >
        <div id="container-text">
          <h2 className="center bottom-half grey-text text-darken-4">
            Lean Simulations{" "}
          </h2>
          <h6>
            Experimenting in real life can be costly. The great thing about
            simulation is that you can try adding more staff or purchasing new
            equipment without the capital expenditure, and if you don’t get the
            results you need, quickly experiment with another scenario – risk
            free.
            <br />
            <br />
            Simulation provides a vehicle for discussion about all aspects of a
            process. The rule and data collection forces you to consider why
            elements work in a certain way and if they could work better. It
            also brings to the surface inconsistencies and inefficiencies
            especially between different parts of a process that work
            independently.
            <br />
            <br />
            A simualtion automatically collects performance measures as it runs
            so that you get accurate numerical results from your simulation.
            Plus with optimization, scenario management and sensitivity
            analysis, simulation allows you to carry out robust analysis on your
            data to make more informed decisions.
            <br />
            <br />
            Simulation is visual and animated. It lets you clearly describe your
            proposal to others. It’s more convincing than just displaying the
            end results as people can’t see where these came from. Simulation is
            so effective at communicating ideas that many companies now use it
            as a sales tool to sell their products.
          </h6>
          <img
            className="materialboxed white top-half responsive-img center"
            width="650"
            src="https://sim.swlean.com/wp-content/uploads/2018/05/Untitled-Diagram-5-821x1024.png"
            alt=""
          />
        </div>
      </div>
    )
  }
}
