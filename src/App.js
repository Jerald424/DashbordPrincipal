import React from "react";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom"
import Header from "./Layout/Header/Header";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Student from "./Pages/student/Student";
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route element={<Outlet />}>
          <Route path="/student" element={<Student />} />
        </Route>
        {/* <Route path="/student" element={<Student />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
