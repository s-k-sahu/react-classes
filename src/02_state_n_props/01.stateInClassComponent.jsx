import React from "react";
import ChildComp from "./PropComp";

class CC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ashok sahu",
      age: 28,
      isMarried: false,
      girlfriends: ["riya", "priya", "russia"],
      about: {
        job: "software",
        location: "BBSR",
        position: "syatem engineer",
        willingToMarry: true,
        searchingForGirls: true,
        didAnyoneFound: false,
        reason: "utupata",
      },
    };
  }
  render() {
    const {
      name,
      age,
      about: { job },
    } = this.state;
    // console.log(this.props.children)
    return (
      <div>
        <h1>I am {name}</h1>
        <h2>i am {age}</h2>
        <h3>{job}</h3>
        <h3>{job}</h3>

        {/* <ChildComp name='kanha sahu'/> */}
        <ChildComp name='kanha sahu'>
          <div style={{color:'red'}}>this is children</div>
        </ChildComp>
        {/* <p>{JSON.stringify(about)}</p> */}
      </div>
    );
  }
}

export default CC;
