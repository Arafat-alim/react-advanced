//! Hoc - it is the function that take a component as a parameter and return a new componnent
//! wraps that receive as an argument and it provide with the extra capability or supercharged the componjent

import React, { Component } from "react";

class Toggler extends Component {
  state = {
    // on: false,
    on: this.props.defaultOnValue,
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
      };
    });
  };
  render() {
    const Component = this.props.component;
    return (
      <Component on={this.state.on} toggle={this.toggle} {...this.props} />
    );
  }
}

export function withToggler(component, optionObj) {
  return function (props) {
    return (
      <Toggler component={component} {...props} defaultOnValue={optionObj} />
      //   created a defaultValue and passing optionObject for setting default value
    );
  };
}
