import React, { Component } from "react";
import MovieListOne from "./UpdateContext/MovieListOne";
import UserContext from "./UpdateContext/userContextOne";

export default class App extends Component {
  state = {
    currentUser: { name: "Mosh" },
  };
  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MovieListOne />
          
        </div>
      </UserContext.Provider>
    );
  }
}
