import React, { Component } from "react";
import { NavHashLink } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";


export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <NavHashLink smooth to="#home">
              
            </NavHashLink>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            ><FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <NavHashLink smooth to="#home">NAME</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#about">ABOUT</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#frame-3">SKILLS</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#schedule">SCHEDULE</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#footer">CONTACT</NavHashLink>
            </li>
          
          </ul>
        </div>
      </nav>
    );
  }
}