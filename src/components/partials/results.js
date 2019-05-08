import React, { Component } from "react"

export default class results extends Component {
  render() {
    return (
      <div className="top-half">
        <h4>Example of results</h4>
        <ul class="collapsible z-depth-0">
          <li className="active">
            <div class="collapsible-header">
              <i class="material-icons">filter_drama</i>Safety
            </div>
            <div class="collapsible-body">
              <p>
                <strong>INCREASED SAFETY:</strong>
                <br />– Improved TRI with 80% in 1 year
              </p>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">place</i>Quality
            </div>
            <div class="collapsible-body">
              <p>
                <strong>QUALITY:</strong>
                <br />– Improved “first time right” from 60% to 85% in 4 months.
              </p>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Delivery performance and
              shelftime
            </div>
            <div class="collapsible-body">
              <p>
                <strong>
                  MINIMIZED SHELFTIME AND KEEPING DELIVERY TOWARDS CUSTOMERS:
                </strong>
                <br />
                – Automotive industry
                <br />• 50%&nbsp;reduction of the total inventory in 2 years,
                customer delivery performance: 98%
              </p>
              <p>
                – Food industry
                <br />• 25% reduction of the total inventory in 1 year, customer
                delivery performance: 99%
              </p>
              <p>
                – Prosess industry
                <br />• 50% reduction of WIP – Work In Progress in 3 months,
                Customer Delivery Performance 99%
              </p>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">add</i>Overall equipment effectiveness
            </div>
            <div class="collapsible-body">
              <p>
                <strong>OEE IMPROVEMENT:</strong>
                <br />
                – Automotive
                <br />
                • Machine line OEE from 60% to 80% in 3 months
                <br />
                – Food industry
                <br />• Packing line OEE from 25% to 66% in 12 months
              </p>
              <p>
                – Process industry
                <br />• Yield from 88% to 94% and doubled volume in 12 months
                without hiring more people{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
