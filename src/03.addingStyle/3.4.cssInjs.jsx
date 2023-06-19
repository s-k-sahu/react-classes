import { Component } from "react";

// export default class CssInJs extends Component{
//     render(){
//         const styles = {
//             div1:{
//                 height:'200px',
//                 width:'200px',
//                 backgroundColor:'black'
//             }
//         }
//         return(
//             <div style={styles.div1}>
//                 this is css in js component
//             </div>
//         )
//     }
// }

export default function CssInJs() {
  const styles = {
    div1: {
      height: "200px",
      width: "200px",
      backgroundColor: "black",
    },
  };
  return <div style={styles.div1}>this is css in js component</div>;
}
