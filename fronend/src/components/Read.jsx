import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:4000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex w-100 vh-[100] justify-center align-middle bg-white">
      <div className="w-50 border bg-white shadow px-5 pb-5 rounded">
        <h3>details of user</h3>
        <div className="mb-2">
          <strong>Name: {data.first_name}</strong>
        </div>
        <div className="mb-2">
          <strong>email: {data.email}</strong>
        </div>
        {/* <div className="mb-2">
          <strong>dob: {data.dob}</strong>
        </div> */}
        <div className="mb-2">
          <strong>gender: {data.gender}</strong>
        </div>

        <Link to={`/update/${id}`} className="bg-green-500">
          Edit
        </Link>
        <Link to="/" className="bg-blue-500 ml-5">
          back
        </Link>
      </div>
    </div>
  );
}

export default Read;
