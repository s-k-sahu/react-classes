import React, { Component } from "react";

class UsingFetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      // products: [
      //   {
      //     id: 1,
      //     name: "samsung",
      //     price: "200",
      //   },
      //   {
      //     id: 2,
      //     name: "nokia",
      //     price: 300,
      //   },
      // ],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ...this.state,
          products: data,
        });
      });
    // console.log("componentDidMount method is calling..");
  }

  render() {
    let USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
    });
    const { products } = this.state;
    console.log("render method is calling..");
    console.log(products);
    return (
      <>
        <h2>using fetch method api call</h2>
        <h4>console.log('xyz')</h4>
        <h4>console.log(products)</h4>
        {/* {
          console.log(products)
        } */}
        {Array.isArray(products) &&
          products.map((value) => {
            const {
              id,
              category,
              description,
              image,
              title,
              price,
              rating: { rate, count },
            } = value;
            return (
              <div key={id} className="d-flex card p-4 m-2 md-3">
                <div>
                  <h1>{title}</h1>
                  <img src={image} alt="img" height={100} width={100} />
                </div>
                <div className="fs-3 text-uppercase">{category}</div>
                <p className="text-danger">{description}</p>
                <ul>
                  <li>price :{USDollar.format(price)}</li>
                  <li>rating rate: {rate}</li>
                  <li>rating count: {count}</li>
                </ul>
              </div>
            );
          })}
        {/* {
          Array.isArray(products) && products.map((value)=>(
            <div>{value.name}</div>
          ))
        } */}
        {/* {Array.isArray(products) &&
          products.map(({ name, id, price }) => <div>{name}</div>)} */}
      </>
    );
  }
}

export default UsingFetch;
