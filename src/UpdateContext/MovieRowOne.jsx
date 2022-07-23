import React, { useContext } from "react";
import UserContext from "./userContextOne";
import CartContext from "./useCartContext";

export default function MovieRowOne() {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  console.log(userContext);
  console.log("CartContext: ", cartContext);
  return (
    <div>
      Movie Row {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}
