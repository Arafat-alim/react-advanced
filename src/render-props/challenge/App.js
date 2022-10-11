import React from "react";
import DataFetcher from "./DataFetcher";

function App() {
  return (
    <div>
      <DataFetcher url={"https://swapi.dev/api/people/1/"}>
        {(data, loading) => {
          return (
            <div>{loading ? <h1>Loading...</h1> : JSON.stringify(data)}</div>
          );
        }}
      </DataFetcher>
    </div>
  );
}

export default App;
