import React from "react";
import { withFavouriteNumber } from "./hoc/withFavouriteNumber";

const Application = (props) => {
  return (
    <div>
      <h1>My Favourite Number is - {props.favouriteNumber}</h1>
    </div>
  );
};

const FavNumber = withFavouriteNumber(Application);
export default FavNumber;
