import React, { Component } from "react";
import { BASE_URL, POSTS } from "../services/constant";
class UsingFetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    console.log("component did mount is calling..");
    fetch(`${BASE_URL}${POSTS}`)
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          ...this.state,
          posts: json,
        })
      );
  }

  render() {
    const { posts } = this.state;
    console.log(posts);
    console.log("render method is calling...");
    return (
      <div className="container" style={{display:'flex',flexWrap:'wrap'}}>
        {Array.isArray(posts) &&
          posts.map((elm) => (
            <div className="card" style={{margin:'10px',padding:'15px'}}>
                <div>userId : {elm.userId}</div>
                <hr />
                <div>title : {elm.title}</div>
                <hr />
                <div>body : {elm.body}</div>
            </div>
          ))}
      </div>
    );
  }
}

export default UsingFetch;
