import React, { useEffect, useState, memo } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  // one time call (componentDidMount)
  // useEffect(() => {
  //   console.log("it call one time");
  //   console.log("component did mount as class component");
  // }, []);

  // one time call (componentDidMount)
  /*
  useEffect(()=>{
    console.log('without dep')
    function xyz(){
      console.log('one time call')
    }
    xyz()
  })
  */

  // useEffect(() => {
  //   console.log('call while component mount and update')
  // }, []);

  //component did mount and component did update will work
  useEffect(() => {
    console.log("call while component mount and update");
    if (count === 5) {
      setCount(0);
    }
  }, [count]);

  // console.log('calll')

  return (
    <div>
      use effect hook {count} <br />
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        click
      </button>
    </div>
  );
};

export default memo(UseEffect);
