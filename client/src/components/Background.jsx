import React, { Component } from "react";
import BackgroundSlideshow from "react-background-slideshow";

import "../home.css";
import home1 from "../home.jpg";
import home2 from "../christmas.jpg";

class Background extends Component {
  render() {
    return (
      <div className="">
        <BackgroundSlideshow images={[home1, home2]} />
      </div>
    );
  }
}

export default Background;
