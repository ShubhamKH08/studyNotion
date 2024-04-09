
import  { createContext, useState } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courseData, setCourseData] = useState({
    courseName: '',
    courseDescription: '',
    price: '',
    category: '',
    tags: [],
    thumbnail: '',
    benefits: '',
    requirements: []
  });

  console.log(courseData);

  return (
    <CourseContext.Provider value={{ courseData, setCourseData }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
