import React, { Component } from "react";
import MovieRowOne from "./MovieRowOne";

import UserContext from "./userContextOne";

export default class MovieListOne extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            MovieList {userContext.name} <MovieRowOne />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
