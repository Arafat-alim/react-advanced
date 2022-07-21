import React from "react";
import withToolTip from "./withToolTip";

function Movie(props) {
  return (
    <div>
      <h1 className="heading">Google hain to chinta nahi hai</h1>
      {props.showTipTool && <div className="toolTip">Some Tool Tip</div>}
    </div>
  );
}

export default withToolTip(Movie);
// export default NewHOC;
