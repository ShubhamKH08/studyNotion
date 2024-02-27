import Logo from "../assets/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  const [searchBar, setSearchBar]= useState(false);
  
  const handleSearchBarToggle = ()=>{
    setSearchBar(!searchBar);
  }

  return (
    <div className="px-8 bg-gray-800 p-4 flex justify-between items-center w-screen ">
      <div className="flex items-center space-x-4">
        <div className="text-white text-2xl font-bold flex items-center gap-2 ">
          <img src={Logo} className="h-12 w-12 relative " />
          <span className="text-2xl text-white relative inset-0 font-thin">
            StudyNotion
          </span>
        </div>
      </div>
        <div className="space-x-4 text-white flex gap-4 ">
          <Link to="/" className="text-white  hover:text-yellow-600 text-xl text-yellow-600 duration font-thin hover:border-b-2 hover:border-gray-600">
            Home
          </Link>
          <div className="relative group hover:text-yellow-600 ">
            <span className="text-black  hover:text-yellow-600 cursor-pointer flex items-center gap-1 text-xl font-thin hover:border-b-2 hover:border-gray-600">Catalog<IoIosArrowDown className="w-4 h-4 font-bold"/></span>
            <div className="absolute  bg-gray-50 group-hover:block hidden p-2 top-full left-0 w-32 duration-200 ">
              <Link to="/catalog/a" className="block text-white py-2">
                A
              </Link>
              <Link to="/catalog/b" className="block text-white py-2">
                B
              </Link>
              <Link to="/catalog/c" className="block text-white py-2">
                C
              </Link>
            </div>
          </div>
          <Link to="/about" className="text-white  hover:text-yellow-600 text-xl font-thin hover:border-b-2 hover:border-gray-600">
            About Us
          </Link>
          <Link to="/contact" className="text-white  hover:text-yellow-600 text-xl font-thin hover:border-b-2 hover:border-gray-600 ">
            Contact Us
          </Link>
        </div>
        
      <div className="flex items-center space-x-7 cursor-pointer">
       { searchBar && <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 text-white px-3 py-1 rounded-md "
          />
        }
        <IoSearch className="w-6 h-6 bg-slate-200" onClick={handleSearchBarToggle}/>  
        <div className="text-white cursor-pointer"><IoCartOutline className="w-6 h-6 bg-slate-200" /></div>

        <div className="text-white text-gray-300 cursor-pointer"><CgProfile className="w-8 h-8 text-gray-100"/></div>
      </div>
    </div>
  );
}

export default Navbar;
