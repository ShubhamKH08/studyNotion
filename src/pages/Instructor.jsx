import  { useState } from "react";
import Course from "../components/Course";
import coursesData from "./sample.json";

const Instructor = () => {
  const [courses, setCourses] = useState([]);

  const fetchCoursesData = async () => {
    try {
      const response = await fetch("sample.json");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses data:", error);
    }
  };

  // Call fetchCoursesData when the component mounts
  // useEffect(() => {
  //     fetchCoursesData();
  // }, []);

  // Uncomment the above useEffect if you want to fetch data on component mount

  return (
    <div className="p-16">
      <div className="grid grid-cols-2 border gap-96 border-gray-300 border-opacity-20 rounded-md h-12 items-center text-gray-400">
        <div className="ps-8">COURSES</div>
        <div className="grid grid-cols-3 ms-12">
          <div>DURATION</div>
          <div>PRICE</div>
          <div>ACTIONS</div>
        </div>
      </div>
      {coursesData.map((course) => (
        <div className="p-6 border border-gray-300 border-opacity-20 rounded-md">
          <Course
            key={course.id}
            image={course.image}
            title={course.title}
            description={course.description}
            created={course.created}
            duration={course.duration}
            price={course.price}
            published={course.published}
          />
        </div>
      ))}
    </div>
  );
};

export default Instructor;
