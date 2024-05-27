import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  const URL = "http://localhost:8080/users";

  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="mb-4">
        <h1 className="text-center">List of users</h1>
      </div>
      <div className="w-75 bg-white rounded p-3">
        <div className="mb-2 text-end">
          <Link to="/users" className="btn btn-success">
            Add new user
          </Link>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>University</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.university}</td>
                <td>
                  <Link to={`/users/${user.id}`} className="btn btn-info me-2">
                    Info
                  </Link>
                  <Link
                    to={`/users/${user.id}`}
                    className="btn btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
