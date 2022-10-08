import React from "react";

export function withFavouriteNumber(component) {
  const Component = component;
  return function (props) {
    return <Component {...props} favouriteNumber={5} />;
  };
}
