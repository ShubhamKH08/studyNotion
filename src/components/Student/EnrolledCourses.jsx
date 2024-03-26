import { useState } from 'react';
import image01 from "../../assets/course_template.jpeg";
import ProgressBar from "@ramonak/react-progress-bar";
import "../../Style/EnrolledCourses.css";
import Sidebar from '../Student/Sidebar';

export const EnrolledCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, image: image01, name: "The complete Python course", description: "A comprehensive Python course covering...", duration: "2 hrs 30 min", progressPercentage: 65, status: "Pending" },
    { id: 2, image: image01, name: "React for Beginners", description: "Learn the basics of React.js", duration: "1 hr 45 min", progressPercentage: 80, status: "Completed" },
    { id:3, image: image01, name: "The complete Python course", description: "A comprehensive Python course", duration: "2 hrs 30 min", progressPercentage: 50, status: "Pending" },
    { id:4, image: image01, name: "The complete Python course", description: "A comprehensive Python course", duration: "2 hrs 30 min", progressPercentage: 100, status: "Completed" }
  ]);

  const [currentView, setCurrentView] = useState("All");

  const filteredCourses = () => {
    if (currentView === "All") {
      return courses;
    } else {
      return courses.filter(course => (course.status === currentView) || (!course.status && currentView === "Pending" && course.progressPercentage < 100));
    }
  };

  return (
    <div className='flex gap-0 max-w-screen overflow-hidden '>
      <div className="w-[14%] h-screen">
        <Sidebar className="fixed"/>
      </div>
      <div className=" bg-richblack-900 w-full py-4 ">
        <span className='ml-4 '>Home / Dashboard / Enrolled Courses</span>
        <div className="flex flex-1 flex-col">
          <span className=" mx-4 mt-2 text-3xl font-medium text-richblack-5">
            Enrolled Courses
          </span>

          
          <div className="flex  ml-4 space-x-6">
          <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max" style={{ boxShadow: 'rgba(255, 255, 255, 0.18) 0px -1px 0px inset;' }}>
            <button
              className={`px-4 py-2 rounded-full ${currentView === "All" ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`}
              onClick={() => setCurrentView("All")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-full ${currentView === "Pending" ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`}
              onClick={() => setCurrentView("Pending")}
            >
              Pending
            </button>
            <button
              className={`px-4 py-2 rounded-full ${currentView === "Completed" ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`}
              onClick={() => setCurrentView("Completed")}
            >
              Completed
            </button>
            </div>
          </div>

          <div className="table-container mx-6">
            <table className='content-table'>
              <thead>
                <tr>
                  <th>Course name</th>
                  <th>Duration</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses().map((course) => (
                  <tr key={course.id}>
                    <td className="flex items-center">
                      <img src={course.image} alt={`Image for ${course.name}`} style={{ width: '60px', height: '60px', borderRadius: '30%' }} />
                      <div className="ml-2">
                        <p className="font-semibold">{course.name}</p>
                        <p className="text-xs text-richblack-300">
                          {course.description.length > 50
                            ? `${course.description.slice(0, 50)}...`
                            : course.description}
                        </p>
                      </div>
                    </td>
                    <td>{course.duration}</td>
                    <td>
                      <div className="flex w-1/5 flex-col gap-2 px-2 py-3">
                        <p className="flex items-center">{course.progressPercentage || 0}%</p>
                        <ProgressBar
                          completed={course.progressPercentage || 0}
                          height="8px"
                          isLabelVisible={false}
                          bgColor="blue"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourses;



