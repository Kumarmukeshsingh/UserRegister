import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [value, setValue] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventdefault();
    axios
      .put("http://localhost:4000/users/" + id, value)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  // console.log(handleUpdate);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users/" + id)
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex w-[100%] vh-[100] justify-center align-middle bg-lime-50">
      <div className="w-50 border bg-white shadow px-5 pb-5 rounded">
        <h1> Add to user </h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="border ml-3 form-control"
              placeholder="enter your name"
              value={value.first_name}
              onChange={(e) =>
                setValue({ ...value, first_name: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="emal"
              className="border ml-3 form-control"
              placeholder="enter your email"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
          </div>
          {/* <div className="mb-2">
            <label htmlFor="name">dob</label>
            <input
              type="date"
              name="dob"
              className="border ml-3"
              placeholder="enter your dob"
              value={value.dob}
              onChange={(e) => setValue({ ...value, dob: e.target.value })}
            />
          </div> */}
          <div className="mb-2">
            <label htmlFor="name">gender</label>
            <input
              type="text"
              name="gender"
              className="border ml-3 form-control"
              placeholder="enter your gender"
              value={value.gender}
              onChange={(e) => setValue({ ...value, gender: e.target.value })}
            />
          </div>
          <Link to="/" className="btn bg-green-500 ml-5 rounded">
            Update
          </Link>
          <Link to="/" className="btn bg-blue-500 ml-5 rounded">
            back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Edit;
