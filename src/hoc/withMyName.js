import React from "react";

export function withMyName(component) {
  const Component = component;
  return function (props) {
    return <Component {...props} myName="Arafat Alim" />;
  };
}
