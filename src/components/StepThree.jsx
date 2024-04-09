

import  { useContext } from 'react';
import CourseContext from '../Context/courseContext';

const StepThree = () => {
  const { courseData, setCourseData } = useContext(CourseContext);

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      price: e.target.value,
    });

  };
  console.log(courseData);

  return (
    <div>
      <h2>Step Three</h2>
    </div>
  );
};

export default StepThree;
