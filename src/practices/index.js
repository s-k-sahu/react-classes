import React, { Component } from "react";
import apiData from "../04_utils/data.json";
import Cards from "./components/Cards";

class ProductPage extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center p-2 grid gap-3">
        {Array.isArray(apiData) && apiData.map((elm,i) => <Cards elm={elm} key={i}/>)}
      </div>
    );
  }
}

export default ProductPage;
