import React, { useContext } from "react";
import UserContext from "./userContextOne";

export default function MovieRowOne() {
  const currentUser = useContext(UserContext);

  console.log(currentUser);
  return <div>Movie Row {currentUser.name}</div>;
}
