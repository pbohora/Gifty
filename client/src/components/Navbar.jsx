import React, { Component } from "react";
import "../Navbar.css";
import logo from "../logo_transparent.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <nav className="nav">
            <a href="">
              <img className="logo-img" src={logo} />
            </a>
            <form action="">
              <input type="text" placeholder="Search....." name="search" />
            </form>
            <div className="float-center">
              <a href="#">Occasions</a>

              <a href="#">Friends</a>

              <a href="#">Parents</a>

              <a href="#">Kids</a>
            </div>
            <div className="float-right">
              <a href="#">Cart</a>
              <a href="#">My Account</a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
