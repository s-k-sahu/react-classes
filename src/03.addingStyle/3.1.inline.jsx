import React, { Component } from "react";
import styles from './style.module.css'

// export default class InlineCss extends Component {
//   render() {
//     return (
//       <div
//         style={{
//           height: "200px",
//           width: "200px",
//           border: "1px solid red",
//           color: "yellow",
//           background: "red",
//         }}
//       >
//         this is inline css component
//       </div>
//     );
//   }
// }

export default function InlineCss() {
  return (
    <div className={styles.xyz}
      style={{
        height: "200px",
        width: "200px",
        border: "1px solid red",
        color: "yellow",
        background: "red",
      }}
    >
      this is inline css component
    </div>
  );
}
