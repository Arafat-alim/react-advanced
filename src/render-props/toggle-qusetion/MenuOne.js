import React from "react";
import Toggler from "./Toggler";

class MenuOne extends React.Component {
  render() {
    return (
      <div>
        <Toggler
          defaultOnValue={true}
          render={(state, toggle) => {
            return (
              <div>
                <button onClick={toggle}>{state ? "Hide" : "Show"}</button>
                <nav style={{ display: state ? "block" : "none" }}>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default MenuOne;
