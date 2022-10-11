import React from "react";

export default function RenderProps(props) {
  return <div>{props.render([1, 2, 3, 4, 5])}</div>;
}
