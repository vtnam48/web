import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function InfoUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const URL = "http://localhost:8080/users";

  useEffect(() => {
    axios
      .get(`${URL}/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) {
    return <div>Waiting for data</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Information</h1>
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <h5 className="card-title">Name: {user.name}</h5>
          </div>
          <div className="mb-3">
            <p className="card-text">Gender: {user.gender}</p>
          </div>
          <div className="mb-3">
            <p className="card-text">School: {user.university}</p>
          </div>

          <Link to="/" className="btn btn-primary">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoUser;
