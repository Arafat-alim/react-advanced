import React, { useContext } from "react";
import UserContext from "./userContextOne";

export default function MovieRowOne() {
  const userContext = useContext(UserContext);

  console.log(userContext);
  return (
    <div>
      Movie Row {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}
