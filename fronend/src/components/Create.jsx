import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const navigate = useNavigate();

function Create() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    //  dob: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/users", value)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex w-[100%] vh-[100] justify-center align-middle bg-lime-50">
      <div className="w-50 border bg-white shadow px-5 pb-5 rounded">
        <h1> Add to user </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="border ml-3"
              placeholder="enter your name"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="emal"
              className="border ml-3"
              placeholder="enter your email"
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
              onChange={(e) => setValue({ ...value, dob: e.target.value })}
            />
          </div> */}
          <div className="mb-2">
            <label htmlFor="name">gender</label>
            <input
              type="text"
              name="gender"
              className="border ml-3"
              placeholder="enter your gender"
              onChange={(e) => setValue({ ...value, gender: e.target.value })}
            />
          </div>
          <button className="btn bg-green-500 ml-5 rounded">Submit</button>
          <Link to="/" className="btn bg-blue-500 ml-5 rounded">
            back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
