import React, { Component } from "react";
import "../Navbar.css";
import logo from "../gifty.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  state = {
    color: "transparent",
    borderbottom: "",
    opacity: "",
    boxShadow: ""
  };

  listenScrollEvent = e => {
    window.scrollY > 50
      ? this.setState({
          color: "white",
          borderbottom: "1px solid black",
          opacity: "0.9",
          textcolor: "red",
          boxShadow: "0px 9px 5px 0px rgba(0,0,0,0.75)"
        })
      : this.setState({
          color: "transparent",
          boxShadow: "",
          borderbottom: ""
        });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <nav
        style={{
          background: this.state.color,
          color: this.state.textcolor,
          borderBottom: this.state.borderbottom,
          opacity: this.state.opacity
        }}
        className="navbar navbar-expand-lg fixed-top navbar-light navfont stroke"
      >
        <span className="navbar" href="#">
          <img className="logo-img" src={logo} />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto navtext">
            <form className="form-inline">
              <input
                className="mr-sm-2"
                type="search"
                placeholder="Search. . . . ."
              />
            </form>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Parents
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Friends
              </a>
            </li>
            <li className="dropdown active">
              <a
                href="#"
                className=" nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Occasions
              </a>
              <ul className="dropdown-menu multi-column columns-2">
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="multi-column-dropdown">
                      <li>
                        <a href="#">Christmas</a>
                      </li>
                      <li>
                        <a href="#">New Year</a>
                      </li>
                      <li>
                        <a href="#">Valentine's Day</a>
                      </li>
                      <li className="divider" />
                      <li>
                        <a href="#">Special Day</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="multi-column-dropdown">
                      <li>
                        <a href="#">Anniversary</a>
                      </li>
                      <li>
                        <a href="#">Birthday</a>
                      </li>
                      <li>
                        <a href="#">Weeding</a>
                      </li>
                      <li className="divider" />
                      <li>
                        <a href="#">Get Well Soon</a>
                      </li>
                      <li className="divider" />
                      <li>
                        <a href="#">Others</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="#">
                Kids
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto navtext mr-5">
            <li className="nav-item active">
              <a className="nav-link" href="">
                My cart
              </a>
            </li>
            <li className="dropdown active">
              <a
                href="#"
                className=" nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                My Account <b className="caret" />
              </a>
              <ul className="dropdown-menu account-dropdown">
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">Create Account</a>
                </li>
                <li>
                  <a href="#">Manage Account</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
