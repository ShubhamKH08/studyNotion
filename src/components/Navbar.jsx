
import Logo from "../assets/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [searchBar, setSearchBar]= useState(false);
  
  const handleSearchBarToggle = () => {
    setSearchBar(!searchBar);
  }

  return (
    <div className="px-8 bg-gray-800 p-4 flex flex-wrap justify-between items-center w-screen">
      <div className="flex items-center space-x-4">
        <div className="text-white text-2xl font-bold flex items-center gap-2">
          <img src={Logo} className="h-10 w-10 relative" alt="Logo" />
          <span className="text-2xl text-white relative inset-0 font-normal">
            StudyNotion
          </span>
        </div>
      </div>
      <div className="flex space-x-4 text-white gap-4">
        <Link to="/" className="text-white hover:text-yellow-400 text-xl font-light">
          Home
        </Link>
        <div className="relative group hover:text-yellow-400">
          <span className="hover:text-yellow-400 cursor-pointer flex items-center gap-1 text-xl font-light group">Catalog<IoIosArrowDown className="w-4 h-4 font-bold group-hover:rotate-180 duration-300"/></span>
          <div className="absolute bg-gray-900 group-hover:block hidden p-2 top-full left-0 w-32 duration-200 rounded-md opacity-95">
            <Link to="/catalog/a" className="block text-white py-2 hover:text-yellow-400">
              A
            </Link>
            <Link to="/catalog/b" className="block text-white py-2 hover:text-yellow-400">
              B
            </Link>
            <Link to="/catalog/c" className="block text-white py-2 hover:text-yellow-400">
              C
            </Link>
          </div>
        </div>
        <Link to="/about" className="text-white hover:text-yellow-400 text-xl font-light">
          About Us
        </Link>
        <Link to="/contact" className="text-white hover:text-yellow-400 text-xl font-light">
          Contact Us
        </Link>
      </div>

      <div className="flex items-center space-x-4 cursor-pointer">
        { searchBar && 
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-3 py-1 rounded-md"
          />
        }
        <IoSearch className="w-6 h-6 text-gray-400 font-light" onClick={handleSearchBarToggle} />  
        <div className="text-white cursor-pointer"><IoCartOutline className="w-6 h-6 text-gray-400 font-light" /></div>
        <div className="text-white cursor-pointer"><Link to="/studentlogin"><CgProfile className="w-7 h-7 text-gray-300 font-light"/></Link></div>
      </div>
    </div>
  );
}

export default Navbar;
