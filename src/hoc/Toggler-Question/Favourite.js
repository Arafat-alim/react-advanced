//! Class Component
//! HOC - Higher Order function is the function which takes a component as a paramter and return a
//! a new component that wraps that componnent that receives an arguement and it provides extra capabilities to it
import React, { Component } from "react";
import { withToggler } from "./hoc/withToggler";
class Favourite extends Component {
  //   state = {
  //     isFavourite: false,
  //   };
  //   toggleFavourite = () => {
  //     this.setState((prevState) => {
  //       return {
  //         isFavourite: !prevState.isFavourite,
  //       };
  //     });
  //   };
  render() {
    return (
      <div>
        <h1>Click Here for Crowd</h1>
        <span onClick={this.props.toggle} style={{ cursor: "pointer" }}>
          {/* {this.props.isFavourite ? "❤" : "🥰"} */}
          {this.props.on ? "❤" : "🥰"}
        </span>
      </div>
    );
  }
}
export default withToggler(Favourite, { defaultOnValue: false });
