// import React from 'react'
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen overflow-auto w-screen inset-0 m-0 ">
      <div className="w-screen h-10 bg-red-100 top-0 mb-2">
        <Navbar />
      </div>
      <div className="translate-y-14 min-h-30 w-full bg-red-900 text-white text-2xl ">
        Homess
      </div>
    </div>
  );
}
