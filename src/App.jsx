
import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import StudentLogin from './pages/StudentLogin';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/studentlogin" element={<StudentLogin />}></Route>
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
