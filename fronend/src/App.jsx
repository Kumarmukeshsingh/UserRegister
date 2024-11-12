import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";

import Read from "./components/Read";
import Edit from "./components/Edit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/update/:id" element={<Edit></Edit>}></Route>
        <Route path="/Read/:id" element={<Read></Read>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
