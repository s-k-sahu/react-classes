import React, { useState } from "react";

const FormHandlingTwo = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    age: 0,
    isMarried: false,
  });

  const handlingFormFields = (e) => {
    let { name, checked, value } = e.target;
    let fieldVal = name === "isMarried" ? checked : value;
    setFormFields({
      ...formFields,
      [name]: fieldVal,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Submitted form data", formFields);
  };

  const handleResetForm = () => {
    setFormFields({
      email: "",
      password: "",
      age: 0,
      isMarried: false,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmitForm} method="POST" onReset={handleResetForm}>
        <label htmlFor="email">Email :</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={formFields?.email}
          onChange={(e) => handlingFormFields(e)}
        />
        <br />
        <label htmlFor="password">Password :</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          required
          value={formFields?.password}
          onChange={(e) => handlingFormFields(e)}
        />
        <br />
        <label htmlFor="age">Age :</label>
        <br />
        <input
          type="number"
          name="age"
          id="age"
          required
          value={formFields?.age}
          onChange={(e) => handlingFormFields(e)}
        />
        <br />
        <label htmlFor="isMarried">isMarried : </label>
        <input
          type="checkbox"
          name="isMarried"
          id="isMarried"
          onChange={(e) => handlingFormFields(e)}
          checked={formFields?.isMarried}
        />
        <br />

        <button type="submit" className="btn btn-success">
          submit
        </button>
        <button type="reset" className="btn btn-danger">
          clear
        </button>
      </form>
    </div>
  );
};

export default FormHandlingTwo;

// import React from "react";

// const FormHandlingTwo = () => {
//   return (
//     <div>
//       <form action="">
//         <label htmlFor="email">Phone No or Email :</label>
//         <br />
//         <input type="text" name="email" id="email" />
//         <br />
//         <label htmlFor="password">Password</label>
//         <br />
//         <input type="text" name="password" id="password" />
//         <br />
//         <label htmlFor="age">Age :</label>
//         <br />
//         <input type="number" name="age" id="age" />
//         <br />
//         <label htmlFor="ismarried">is Married</label>
//         <input type="checkbox" name="ismarried" id="ismarried" />
//         <br />
//         <br />
//         <button type="submit" className="btn btn-success">
//           submit //{" "}
//         </button>{" "}
//         <button type="reset" className="btn btn-danger">
//           clear{" "}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormHandlingTwo;
