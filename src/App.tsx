import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

const App = () => {
 const {users,error,isLoading,setUsers,setError}=useUsers();
  const handleDelete = (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));

    const request =userService.delete(id)

    request
    .catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };


  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      name: "ayash",
    };
    
    setUsers([newUser, ...users]);

    const request =userService.insert<User>(newUser)

    request
      .then(({ data: updatedUsers }) => setUsers([updatedUsers, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };


  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    const request= userService.update<User>(user.id,updatedUser)
   .catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      <h1>Users</h1>
      {error && <h1 className="text-danger">{error}</h1>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => {
                  updateUser(user);
                }}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
