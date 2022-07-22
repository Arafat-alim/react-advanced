import { computeHeadingLevel } from "@testing-library/react";
import React from "react";

function Counter() {
  //! Use State hooks
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");
  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleInput(e) {
    setName(e.target.value);
  }
  return (
    <div>
      Counter: {count}
      <div>
        <input type="text" onChange={(e) => handleInput(e)} />
        {name}
      </div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
