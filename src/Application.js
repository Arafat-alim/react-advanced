import React from "react";
import Favourite from "./hoc/Toggler-Question/Favourite";
import Menu from "./hoc/Toggler-Question/Menu";
// // import { withFavouriteNumber } from "./hoc/withFavouriteNumber";
// import { withMyName } from "./hoc/withMyName";

const Application = (props) => {
  return (
    <div>
      {/* <h1>My Name is - {props.myName}</h1> */}
      {/* <h1>My Favourite Number is - {props.favouriteNumber}</h1> */}

      <Menu />
      <hr />
      <Favourite />
    </div>
  );
};

// const FavNumber = withFavouriteNumber(Application);
// const FavName = withMyName(Application);
// export default FavName;
export default Application;
