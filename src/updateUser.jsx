import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [university, setUniversity] = useState("");
  const navigate = useNavigate();

  const REACT_APP_API_URL = "http://localhost:8080/users";

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URL}/${id}`)
      .then((res) => {
        console.log(res);
        setName(res.data.name);
        setGender(res.data.gender);
        setUniversity(res.data.university);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(`${REACT_APP_API_URL}/${id}`, {
        name,
        gender,
        university,
      });
      console.log(result);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="w-50 bg-white rounded shadow p-4">
        <form onSubmit={handleUpdate}>
          <h2 className="mb-4 text-center">Update Member</h2>
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
            <label htmlFor="school" className="form-label">
              School
            </label>
            <input
              type="text"
              id="school"
              className="form-control"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
