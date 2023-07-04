import axios from "axios";
import React, { Component } from "react";

class UsingAxios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) =>
  //       this.setState({
  //         ...this.state,
  //         data:response.data,
  //       })
  //     )
  //     .catch((error) => {
  //       if (error instanceof Error) {
  //         console.log(error.message);
  //       }
  //     });
  // }
  componentDidMount() {
    let data = null;
    try {
      data = axios
        .get("https://fakestoreapi.com/products")
        .then((response) => response.data);
    console.log(data)
      } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
    this.setState({
      ...this.state,
      data,
    });

    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((response) =>
    //     this.setState({
    //       ...this.state,
    //       data: response.data,
    //     })
    //   )
    //   .catch((error) => {
    //     if (error instanceof Error) {
    //       console.log(error.message);
    //     }
    //   });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {Array.isArray(data) &&
          data.map((elm) => (
            <div key={elm?.id}>
              <div>{elm?.price}</div>
            </div>
          ))}
      </div>
    );
  }
}

export default UsingAxios;
