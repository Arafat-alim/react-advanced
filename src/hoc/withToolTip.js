import React from "react";

function withToolTip(Component) {
  return function WithToolTip(props) {
    const [showTipTool, setShowTipTool] = React.useState(false);
    let mouseOver = () => {
      setShowTipTool(true);
    };
    let mouseOut = () => {
      setShowTipTool(false);
    };
    return (
      <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <Component {...props} showTipTool={showTipTool} />
      </div>
    );
  };
}

export default withToolTip;
