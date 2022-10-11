import React from "react";
import Toggler from "./Toggler";

function FavouriteOne() {
  return (
    <div>
      <Toggler
        defaultOnValue={false}
        render={(state, toggle) => {
          return (
            <div>
              <h1>Click here for your favourite Heart</h1>
              <span onClick={toggle} style={{ cursor: "pointer" }}>
                {state ? "❤" : "🔥"}
              </span>
            </div>
          );
        }}
      />
    </div>
  );
}

export default FavouriteOne;
