import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  //creating a states
  const [users, setUsers] = useState([]);
  //! using use Effect for fetching the data
  useEffect(() => {
    async function getUsers() {
      let result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }
    //calling our getUsers
    getUsers();
  });

  let userElement = users.map((item) => {
    return (
      <div key={item.id}>
        <ul>{item.name}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>List of Users</h1>
      {userElement}
    </div>
  );
}
