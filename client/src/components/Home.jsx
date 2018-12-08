import React, { Component } from "react";
import BackgroundSlideshow from "react-background-slideshow";
import Navbar from "./Navbar";
import "../home.css";
import home from "../home.jpg";

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
