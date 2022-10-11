import React from "react";
// import Favourite from "./hoc/Toggler-Question/Favourite";
// import Menu from "./hoc/Toggler-Question/Menu";
// import ApplicationOne from "./render-props/ApplicationOne";
import FavouriteOne from "./render-props/toggle-qusetion/FavouriteOne";
import MenuOne from "./render-props/toggle-qusetion/MenuOne";
// // import { withFavouriteNumber } from "./hoc/withFavouriteNumber";
// import { withMyName } from "./hoc/withMyName";

const Application = (props) => {
  return (
    <div>
      {/* <h1>My Name is - {props.myName}</h1> */}
      {/* <h1>My Favourite Number is - {props.favouriteNumber}</h1> */}

      {/* HIgher Order Function */}
      {/* <Menu />
      <hr />
      <Favourite /> */}

      {/* Render Props */}
      {/* <ApplicationOne /> */}
      <FavouriteOne />
      <hr />
      <MenuOne />
    </div>
  );
};

// const FavNumber = withFavouriteNumber(Application);
// const FavName = withMyName(Application);
// export default FavName;
export default Application;
