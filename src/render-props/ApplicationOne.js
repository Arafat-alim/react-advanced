import React from "react";
import RenderProps from "./RenderProps";
export default function ApplicationOne() {
  return (
    <div>
      <h1>Welcome to the React Advanced </h1>
      <RenderProps
        render={function (arr) {
          return arr.map((item) => item * 3 + " "); // 3 6 9 12 15
        }}
      />
    </div>
  );
}
