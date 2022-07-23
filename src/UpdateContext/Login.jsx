import React, { useContext } from "react";
import UserContext from "./userContextOne";

export default function Login() {
  const userContext = useContext(UserContext);
  console.log(userContext);
  return (
    <div>
      <button onClick={() => userContext.isloggedIn("username")}>Login</button>
    </div>
  );
}
