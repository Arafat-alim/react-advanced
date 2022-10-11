//! HOC - It is the funciton which takes component as a parameter and return a new component
//! wrap that component that receives as an arguement and it provide with an extra capabiliies
import React, { Component } from "react";

class Menu extends Component {
  state = {
    isShow: true,
  };

  toggleMenu = () => {
    this.setState((prevState) => {
      return {
        isShow: !prevState.isShow,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleMenu}>
          {this.state.isShow ? "Show" : "Hide"}
        </button>

        <nav style={{ display: this.state.isShow ? "block" : "none" }}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
