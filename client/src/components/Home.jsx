import React, { Component } from "react";
import home from "../home1.mp4";
import GiftList from "./GiftList";
import "../home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg">
          <div className="v-cover">
            <video src={home} autoPlay="true" loop="true" />
          </div>
          <div className="home-body">
            <p className="item">Now sending Gift for beloved ones is easy</p>
          </div>
          <div className="arrow-down">
            <button>New Arrivals</button>
          </div>
        </div>
        <GiftList />
      </div>
    );
  }
}

export default Home;
