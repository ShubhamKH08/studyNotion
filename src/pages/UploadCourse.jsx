
import { Link } from 'react-router-dom';
import { CourseProvider } from '../Context/courseContext';
import MultiStepForm from '../components/MultiStepForm';
import { FaChevronLeft } from "react-icons/fa";
import Sidebar from "../components/Instructor/Sidebar";


const UploadCourse = () => {

  return (
    // <>
    <div className="min-h-screen  flex gap-2 ">
  
      <div className="w-[28%] min-h-screen bg-gray-800">
        <Sidebar className="fixed" />
      </div>


      <div className="mx-auto min-h-screen  w-full">
      <CourseProvider>
        <div className=" p-10 ">
          <MultiStepForm />
        </div>
      </CourseProvider></div>

      <div className="w-[50%] h-1/2  p-2 ">
        <div className="border border-[#2C333F] rounded-xl w-full h-1/2 bg-[#161D29] p-4">
          <div className="font-bold text-xl">⚡Course Upload Tips</div>

          <ul className="list-disc pl-6 mt-4">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>
              Make Announcements to notify any important notes to all enrolled
              students at once.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UploadCourse
