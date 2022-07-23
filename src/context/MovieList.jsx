import React, { Component } from "react";
import MovieRow from "./MovieRow";
import UserContext from "./userContext";

export default class MovieList extends Component {
  //! static property creating inside the class component
  static contextType = UserContext;
  componentDidMount() {
    console.log("context", this.context); //context Object { name: "Mosh" }
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List {userContext.name} <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
//! static property creating outside the class component

// MovieList.contextType = UserContext;
