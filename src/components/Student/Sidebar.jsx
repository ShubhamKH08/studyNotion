import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiSpeedometer } from "react-icons/gi";
const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const sections = [
    {
      title: '',
      options: [
        { id: 'Profile', name: 'My Profile', icon: <GiSpeedometer />, path: '/profile' },
        { id: 'Enrolled', name: 'Enrolled Courses', icon: <GiSpeedometer />, path: '/student-purchase-history' },
        { id: 'home-wishlist', name: 'Wishlist', icon: <GiSpeedometer />, path: '/student-wishlist' },
        { id: 'Purchase', name: 'Purchase History', icon: <GiSpeedometer />, path: '/studentreviews' },
        { id: 'Courses', name: 'Courses', icon: <GiSpeedometer />, path: '/student-Courses' }
      ]
    },
    
    {
      title: '',
      options: [
        { id: 'no-name-setting', name: 'Setting', icon: <GiSpeedometer />, path: '/setting' },
        { id: 'no-name-logout', name: 'Log Out', icon: <GiSpeedometer />, path: '/logout' }
      ]
    }
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.id);
  };

  return (
    <div className="bg-gray-800 h-screen  p-1  text-white">
      {sections.map((section, index) => (
        <div key={index}>
          <hr className="my-2 border-t-2 border-gray-700" />
          <p className="text-xl font-bold">{section.title}</p>
          <ul className="mt-2">
            {section.options.map((option, i) => (
              <li key={i} className={`group px-2  duration-75 bg-opacity-10 flex items-center w-full mt-2 hover:text-yellow-300  hover:bg-yellow-950 ${selectedOption === option.id ? 'bg-yellow-700' : ''}`}>
                {option.icon}
                <Link
                  to={option.path}
                  className={`ml-2 my-1 duration-75 group-hover:text-yellow-300 ${selectedOption === option.id ? 'text-yellow-400' : 'text-white'}`}
                  onClick={() => handleOptionClick(option)}
                > 
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
