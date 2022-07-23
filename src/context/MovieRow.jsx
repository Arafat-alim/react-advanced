import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow() {
  const currentUser = useContext(UserContext);

  console.log("user-context", currentUser);
  return <div>Movie Row: {currentUser.name}</div>;
}

export default MovieRow;
