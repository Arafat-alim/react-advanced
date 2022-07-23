import React, { Component } from "react";
import MovieRowOne from "./MovieRowOne";

import UserContext from "./userContextOne";

export default class MovieListOne extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List -
            {userContext.currentUser ? userContext.currentUser.name : ""}
            <MovieRowOne />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
