import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CgUser } from "react-icons/cg";
import { LiaBookSolid } from "react-icons/lia";
import { LuBookmark } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";

const Sidebar = () => {

  const items = [
    {
      id: 1,
      text: 'My Profile',
      icon: <CgUser />,
      // subItems: [
      //   {
      //     id: 1,
      //     text: 'Sub Item 1',
      //     icon: <RiSettings3Line />,
      //   },
      // ],
    },
    {
      id: 2,
      text: 'Enrolled Courses',
      icon: <LiaBookSolid />,
      // subItems: [
      //   {
      //     id: 2,
      //     text: 'Sub Item 2',
      //     icon: <RiSettings3Line />,
      //   },
      // ],
    },
    {
      id:3,
      text:'Wishlist',
      icon:<LuBookmark />,
    },
    {
      id:4,
      text:'Purchase History',
      icon:<IoCartOutline />,
    },
    {
      id:5,
      text:'Courses',
      icon:<LuGraduationCap />,
    },
  ];

  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (itemId) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [itemId]: !prevExpandedItems[itemId],
    }));
  };

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div key={item.id} className="relative">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleItem(item.id)}
          >
            <div>{item.icon}</div>
            <span>{item.text}</span>
            <div>{expandedItems[item.id] ? '-' : '+'}</div>
          </div>
          <AnimatePresence>
            {expandedItems[item.id] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="pl-8 overflow-hidden"
              >
                {item.subItems.map((subItem) => (
                  <div key={subItem.id} className="flex items-center">
                    <div>{subItem.icon}</div>
                    <span>{subItem.text}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
