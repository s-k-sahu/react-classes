import React, { useEffect,useRef } from "react";

const FormHandling_1 = () => {
    const formElement = useRef(null)
    // console.log(document.forms[0]);
    // console.log(document.forms[1]);

    useEffect(() => {
      console.log(formElement.current)
    // console.log(document.forms[0]);
    // console.log(document.forms[1]);
  }, []);
  return (
    <div className="container">
      <form action="" ref={formElement}>
        <label htmlFor="email" className="text-info">
          enter email :
        </label>
        <br />
        <input type="text" name="email" id="email" />
      </form>
      <form action="">
        <label htmlFor="email" className="text-info">
          enter email :
        </label>
        <br />
        <input type="text" name="email" id="email" />
      </form>
    </div>
  );
};

export default FormHandling_1;
