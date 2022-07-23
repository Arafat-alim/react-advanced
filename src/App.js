import React, { Component } from "react";
import Login from "./UpdateContext/Login";
import MovieListOne from "./UpdateContext/MovieListOne";
import UserContext from "./UpdateContext/userContextOne";

export default class App extends Component {
  //updating the state
  handleInput = (username) => {
    const user = { name: "Arafat" };
    this.setState({ currentUser: user });
  };

  state = {
    currentUser: null,
  };
  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          isloggedIn: this.handleInput,
        }}
      >
        <div>
          <MovieListOne />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}
