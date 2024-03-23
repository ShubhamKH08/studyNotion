import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiSpeedometer } from "react-icons/gi";
const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const sections = [
    {
      title: 'Home',
      options: [
        { id: 'home-enrolled', name: 'Enrolled Courses', icon: <GiSpeedometer />, path: '/enrolled-courses' },
        { id: 'home-purchase', name: 'Purchase History', icon: <GiSpeedometer />, path: '/purchase-history' },
        { id: 'home-wishlist', name: 'Wishlist', icon: <GiSpeedometer />, path: '/wishlist' },
        { id: 'home-reviews', name: 'Reviews', icon: <GiSpeedometer />, path: '/reviews' },
        { id: 'home-dashboard', name: 'Dashboard', icon: <GiSpeedometer />, path: '/dashboard' }
      ]
    },
    {
      title: 'Instructor',
      options: [
        { id: 'instructor-earning', name: 'Earning', icon: <GiSpeedometer />, path: '/earning' },
        { id: 'instructor-withdrawals', name: 'Withdrawals', icon: <GiSpeedometer />, path: '/withdrawals' },
        { id: 'instructor-courses', name: 'My Courses', icon: <GiSpeedometer />, path: '/my-courses' }
      ]
    },
    {
      title: 'No-Name',
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
    <div className="bg-gray-800 h-screen  py-8 px-4 text-white">
      {sections.map((section, index) => (
        <div key={index}>
          <p className="text-xl font-bold">{section.title}</p>
          <hr className="my-2 border-t-2 border-green-500" />
          <ul className="mt-2">
            {section.options.map((option, i) => (
              <li key={i} className={`flex items-center mt-2 ${selectedOption === option.id ? 'bg-green-500' : ''}`}>
                {option.icon}
                <Link
                  to={option.path}
                  className={`ml-2 ${selectedOption === option.id ? 'text-red-500' : 'text-white'}`}
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
