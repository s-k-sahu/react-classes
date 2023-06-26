import React, { Component } from "react";
import "./styles/main.scss";
import styles from "./styles/main.module.scss";

export default class AddingSass extends Component {
  render() {
    return (
      <div>
        <h1> using sass </h1>
        <h1 className="heading_1">
          i am a component where sass styling is added!{" "}
        </h1>
        <h1 className={styles.heading_2}>
          i am a component where sass styling is added!{" "}
        </h1>
        <hr />
      </div>
    );
  }
}
