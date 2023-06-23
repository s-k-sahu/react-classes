import React, { Component } from "react";

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { elm } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={elm?.img}
          class="card-img-top"
          alt="electronics"
          height={300}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{elm?.mobile?.name.toUpperCase()}</h5>
          <p className="card-text">{elm?.mobile?.review}</p>
          <h6>Price : Rs.{elm?.mobile?.price}</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Display :
            <span className="text-danger">
              {elm?.mobile?.features?.display?.toUpperCase()}
            </span>
          </li>
          <li className="list-group-item">
            RAM : {elm?.mobile?.features?.RAM}
          </li>
          <li className="list-group-item">
            ROM : {elm?.mobile?.features?.ROM}
          </li>
          <li className="list-group-item">
            Primary Camera : {elm?.mobile?.features?.camera_primary}
          </li>
          <li className="list-group-item">
            Secondary Camera : {elm?.mobile?.features?.secondary_primary}
          </li>
          <li className="list-group-item">
            Processor : {elm?.mobile?.features?.processor}
          </li>
          <li className="list-group-item">
            Battery : {elm?.mobile?.features?.battery_capacity}
          </li>
        </ul>
      </div>
    );
  }
}
