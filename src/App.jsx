import React from "react";
import Dashboard from "./dashboard";
import Blogpost from "./blogpost";
import Contact from "./contact";
import About from "./About";
import Signin from "./signin";
import Signup from "./signup";
import Sysblog from "./Sys_blog";
import Add_blog from "./Add_blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogpost/:_id" element={<Blogpost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/SandraHerMajesty" element={<Sysblog />} />
        <Route path="/Add_blog" element={<Add_blog />} />
      </Routes>
    </Router>
  );
}

export default App;
