import React from "react";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom"
import ReactStickyBox from "react-sticky-box";
import Header from "./Layout/Header/Header";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Fees from "./Pages/Fees/Fees";
import Student from "./Pages/student/Student";
import "./app.css"
function App() {
  return (
    <HashRouter>
      {/* <ReactStickyBox className="header-app"> */}
      <Header />
      {/* </ReactStickyBox> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route element={<Outlet />}>
          <Route path="/student" element={<Student />} />
          <Route path="/fees" element={<Fees />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
