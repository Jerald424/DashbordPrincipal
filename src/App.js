import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header";
import "./app.css"
import Dashboard from "./Components/Dashboard/Dashboard";
import Student from "./Components/student/Student";
function App() {
  return (
    <div >
      <HashRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
