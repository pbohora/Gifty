import React, { Component } from "react";
import Navbar from "./Navbar";
import "../home.css";

class Home extends Component {
  render() {
    return (
      <div className="bg center">
        <Navbar />
        <div className="home-body">
          <p>Now sending Gift for the beloved ones is easy</p>
        </div>
        <div className="arrow-down">
          <button>New Arrivals</button>
        </div>
      </div>
    );
  }
}

export default Home;
