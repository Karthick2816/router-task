import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import Querry from "./components/Querry";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/querry" element={<Querry />} />

          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
