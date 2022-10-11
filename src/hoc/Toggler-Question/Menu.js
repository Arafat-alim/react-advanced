//! HOC - It is the funciton which takes component as a parameter and return a new component
//! wrap that component that receives as an arguement and it provide with an extra capabiliies
import React, { Component } from "react";
import { withToggler } from "./hoc/withToggler";
class Menu extends Component {
  //   state = {
  //     isShow: true,
  //   };

  //   toggleMenu = () => {
  //     this.setState((prevState) => {
  //       return {
  //         isShow: !prevState.isShow,
  //       };
  //     });
  //   };
  render() {
    return (
      <div>
        <button onClick={this.props.toggle}>
          {this.props.on ? "Show" : "Hide"}
        </button>

        <nav style={{ display: this.props.on ? "block" : "none" }}>
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

export default withToggler(Menu, { defaultOnValue: true });
