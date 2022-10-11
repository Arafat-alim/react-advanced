import React from "react";

class Toggler extends React.Component {
  state = {
    isOn: this.props.defaultOnValue,
  };
  toggler = () => {
    this.setState((prevState) => {
      return {
        isOn: !prevState.isOn,
      };
    });
  };

  render() {
    return <div>{this.props.render(this.state.isOn, this.toggler)}</div>;
  }
}

export default Toggler;
