import React, { Component } from "react";
import Sky from "./sky/sky";

import Navbar from "./Navbar";
import img from "../logo_transparent.png"
//import { Button } from "reactstrap";
class NewHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "space",
      background: "burlywood",
      how: 100
    };
  }
  render() {
    const { mode, background, how } = this.state;
    const modes = {
      space: {
        0: img
      }
    };
    return (
      <div className="App">
    <Navbar />
       
      <h2>christmas is here </h2>
        <Sky
          images={modes[mode]}
          how={how}
          size="100px"
          time={30}
          background={background}
        />
      </div>
    );
  }
}

export default NewHome;
