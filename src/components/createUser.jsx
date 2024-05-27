import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [university, setUniversity] = useState("");
  const navigate = useNavigate();

  const URL = "http://localhost:8080/users";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}`, {
        name,
        gender,
        university,
      });
      if (response.status === 200) {
        navigate("/");
      } else {
        console.log("Unexpected response status:", response.status);
      }
    } catch (err) {
      console.error("There was an error creating the user!", err);
    }
  };

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="w-50 bg-white rounded shadow p-4">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4 text-center">Add New Member</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <input
              id="gender"
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="university" className="form-label">
              School
            </label>
            <input
              type="text"
              id="university"
              className="form-control"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
