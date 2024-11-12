import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(user);

  const navigate = useNavigate();
  const handleDelete = (id) => {
    const confirm = window.confirm("your want to delete");
    if (confirm) {
      axios
        .delete("http://localhost:4000/users/" + id)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <h1 className=" ml-[50%]">OUR USER</h1>
      <div className="w-75 rounded bg-white border shadow p-4 ">
        <div className="flex justify-end">
          <Link to="/create" className="bg-green-500">
            Add+
          </Link>
        </div>
        <table>
          {/* <th>
             <tr>No</tr>
             <tr>name</tr>
             <tr>email</tr>
             <tr>dob</tr>
             <tr>id</tr>
           </th> */}
          <th>No</th>
          <th>Name</th>
          <th>email</th>
          {/* <th>dob</th> */}
          <th>id</th>
          {/* <th>Read</th>
          <th>Edit</th>
          <th>Delete</th> */}

          <tbody>
            {user.map((d, i) => {
              return (
                <tr key={d.id}>
                  <td>{i}</td>
                  <td>
                    {d.first_name} {d.last_name}
                  </td>
                  <td>{d.email}</td>
                  {/* <td>{d.dob}</td> */}
                  <td>{d.id}</td>
                  <td>
                    <Link
                      to={`/Read/${d.id}`}
                      className="btn btn-sm bg-green-500 m-2 rounded-md "
                    >
                      Read
                    </Link>
                    <Link
                      to={`/update/${d.id}`}
                      className="btn btn-sm bg-blue-500 m-2 rounded-md "
                    >
                      Edit
                    </Link>

                    <button
                      onClick={(e) => handleDelete(d.id)}
                      className="btn btn-sm bg-red-500 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
