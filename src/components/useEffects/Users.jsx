import { useEffect, useState } from "react";
import "./users.css";
import User from "../Users/User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <h1>Users : {users.length}</h1>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </>
  );
};

export default Users;
