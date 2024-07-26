
import Logo from "../assets/Logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion"



import { IoIosLogOut } from "react-icons/io";

function Navbar() {
  
  const [searchBar, setSearchBar] = useState(false);
  const [ifSignedIn, setIfSignedIn] = useState(false);
  const [profileClick, setProfileClick] = useState(false);

 const handleLogOut = ()=>{
  // localStorage.removeItem('token');
  localStorage.removeItem('token:');
  
 }  

  const handleSearchBarToggle = () => {
    setSearchBar(!searchBar);
  };
  

 
  useEffect(() => {
    var token1 = localStorage.getItem("token");
    var token2 = localStorage.getItem("token:");
    if (token1 || token2) {
      setIfSignedIn(true);
    } else {
      setIfSignedIn(false);
    }
  }, [localStorage.getItem("token:")]); // Include localStorage.getItem("token") in the dependency array

  
  // Define array for menu items and sub-menu items
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Catalog", subMenu: ["Web Development", "Machine Learning", "Cyber Security"] },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
    {title: "Upload", link:"/uploadcourse"}
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
        <div>
            {/* // <img src={`https://ui-avatars.com/api/?name=${firstName}+${LastName}`} alt="Avatar" className="avatar"/> */}
            <img src={`https://ui-avatars.com/api/?name=Shubham+Hagawane`} alt="Avatar" className="w-10 h-10 rounded-full" onClick={()=>setProfileClick(profileClick => !profileClick)}/>
           
        
            
            </div>
          ) : (
            // <Link to="/studentlogin">
             <Link onClick={handleLogOut} to="/studentlogin">
              {" "}
              <button className="p-1 rounded-md font-thin border-boxBorder border ">
                Sign In
              </button>
            </Link>
          )}
          </div>
      </div>
      <motion.div  transition={{ ease: "easeOut", duration: 20 }}   className={`absolute translate-y-10 -translate-x-12 text-sm   text-neutral-800 cursor-pointer  w-30 p-2 bg-white rounded-lg right-0 flex flex-col justify-center  items-center gap-2 ${profileClick ?`duration-200  block` :`hidden` } `}>
            <Link to="/studentlogin" onClick={handleLogOut} className="flex justify-between items-center gap-2"><IoIosLogOut className="h- w-4" /><span>Log out</span></Link>
           </motion.div>
    </div>
  );
}

export default Navbar;
