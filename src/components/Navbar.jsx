import Logo from "../assets/Logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [searchBar, setSearchBar] = useState(false);
  const [ifSignedIn, setIfSignedIn] = useState(false);

  const handleSearchBarToggle = () => {
    setSearchBar(!searchBar);
  };

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      setIfSignedIn(true);
    }
  }, []); // <--- Added empty dependency array to ensure useEffect runs only once

  // Define array for menu items and sub-menu items
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Catalog", subMenu: ["A", "B", "C"] },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="px-8  bg-topBar py-3 flex justify-between items-center w-screen ">
      <div className="flex items-center space-x-4 ml-4">
        <div className="text-white text-2xl font-bold flex items-center gap-2 ">
          <img src={Logo} className="h-8 w-8 relative " alt="Logo" />
          <span className="md:text-xl xl:text-2xl  text-white relative inset-0 font-thin">
            StudyNotion
          </span>
        </div>
      </div>
      <div className="space-x-4 text-white flex gap-4 z-10 ">
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className="relative group hover:text-yellow-600 text-topbarText"
          >
            {menuItem.subMenu ? (
              <div>
                <span className="group hover:text-yellow-600 text-topbarText cursor-pointer flex items-center gap-1 lg:text-xl font-thin ">
                  {menuItem.title}
                  <IoIosArrowDown className="w-4 h-4 font-bold group-hover:translate-y-1 duration-75" />
                </span>
                <div className="absolute rounded-xl -translate-x-4 text-gray-700 bg-gray-100 group-hover:block hidden p-2 top-full left-0 w-32 duration-200 font-thin">
                  {menuItem.subMenu.map((subMenuItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={`/catalog/${subMenuItem.toLowerCase()}`}
                      className="block text-black py-1 hover:scale-105 duration-100"
                    >
                      {subMenuItem}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                to={menuItem.link}
                className="text-topbarText hover:text-yellow-600 text-xl font-thin"
              >
                {menuItem.title}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className=" mr-4 flex items-center space-x-6 cursor-pointer">
        {searchBar && (
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-3 py-1 rounded-md duration-75"
          />
        )}
        <IoSearch
          className="w-6 h-6 bg-slate-200 bg-transparent"
          onClick={handleSearchBarToggle}
        />
        <div className="text-white cursor-pointer">
          <IoCartOutline className="w-6 h-6 bg-slate-200 bg-transparent" />
        </div>
        <div className=" text-gray-300 cursor-pointer">
          {ifSignedIn ? (
            <CgProfile className="w-8 h-8 text-gray-100 bg-transparent" />
          ) : (
            <Link to="/studentlogin">
              {" "}
              <button className="p-1 rounded-md font-thin border-boxBorder border ">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
