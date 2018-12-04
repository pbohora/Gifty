import React, { Component } from "react";
import Sky from "./components/sky/sky";
import "./App.css";
//import "./components/navbar/navbar";
//import { Button } from "reactstrap";
class App extends Component {
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
        0: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      }
    };
    return (
      <div className="App">
        <div className="title">
          <h1>logo</h1>
        </div>
        <div className="nav">
          <nav>
            <span>HOME</span>
            <span>CONTACT</span>
            <span>PRODUCTS</span>
          </nav>
        </div>
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

export default App;
