import React, { Fragment } from "react";

// class Keys extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: [1, 2, 3, 4, 5],
//     };
//   }

//   render() {
//     const { counter } = this.state;
//     return (
//       <div>
//         {/* <div key={1}>1</div>
//         <div>2</div>
//         <div key={2}>3</div>
//         <div>4</div>
//         <div>5</div> */}
//         {counter.map((elm, i) => (
//           <Fragment key={i}>{elm}</Fragment>
//         ))}
//       </div>
//     );
//   }
// }

// export default Keys;


function Keys(){
    const counter = [1,2,3,4,5]
    return(
        <div>
            {counter.map((elm,i)=>(
                <Fragment key={i}>{elm}</Fragment>
            ))}
        </div>
    )
}

export default Keys