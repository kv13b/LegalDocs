import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Docs from "./components/Docs";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </div>
  );
}

export default App;
