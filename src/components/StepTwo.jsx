

import  { useContext } from 'react';
import CourseContext from '../Context/courseContext';

const StepTwo = () => {
  const { courseData, setCourseData } = useContext(CourseContext);

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      description: e.target.value,
    });

  };
  console.log(courseData);

  return (
    <div>
      <h2>Step Two</h2>
    </div>
  );
};

export default StepTwo;



// Python
// Web Developement
// Android Developement
// Blockchain
// Artificial Intelligence
// Data Science
// Cloud Computing
// Devops
// CyberSecurity