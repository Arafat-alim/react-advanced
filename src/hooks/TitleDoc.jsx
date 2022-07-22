import React, { useEffect } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import useDocumentTitle from "./useDocumentTitle";

function TitleDoc() {
  //! state
  const [name, setName] = React.useState("");
  const [count, setCount] = React.useState(0);
  //! componentDidMount
  //! ComponentDidUpdate
  //! ComponentWillUnMount - Clean up code
  //! Mounting and Updating Phase
  //   useEffect(() => {
  //     document.title = `${name} has ${count} clicked`;

  //     return () => {
  //       console.log("Clean Up COde");
  //     };
  //   }, [count]);

  // ! calling a custom hook
  useDocumentTitle(`${name} has ${count} clicked!`);

  return (
    <div>
      <h1>Using useEffect Hooks</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Counter: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default TitleDoc;
