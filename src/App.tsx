import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import Navbar from "./Navigation";
import ProfileScreen from "./Screen/ProfileScreen/ProfileScreen";

import "./App.css";

import Login from "./Screen/Login";
import Register from "./Screen/Register";
import RegisterCompany from "./Screen/register-company";

import "bootstrap/dist/css/bootstrap.min.css";
import AddEvents from "./Screen/AddEvents/AddEvents";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/addEvents" element={<AddEvents />} />
        <Route path="/Profile" element={<ProfileScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
