
import { Link } from 'react-router-dom';
import { CourseProvider } from '../Context/courseContext';
import MultiStepForm from '../components/MultiStepForm';
import { FaChevronLeft } from "react-icons/fa";
import Sidebar from "../components/Instructor/Sidebar";


const UploadCourse = () => {

  return (
    // <>
    <div className="min-h-screen  flex">
    <div className="w-[14%] min-h-screen h-full ">
      <Sidebar className="fixed"/>
    </div>

    <div className="container mx-auto p-4 ">

    <div className="">
      <Link to="/home" className='flex items-center text-sm'>
        <FaChevronLeft className="mr-2" /> Go to Home
      </Link>
    </div>

    <div className='grid grid-cols-2 '>

      <CourseProvider>
        <div className="p-10 mx-36 w-11/12">
          <MultiStepForm />
        </div>
      </CourseProvider>

      <div className='px-20'>
        <div className='bg-gray-900 p-10 rounded-lg border-2 border-gray-700 text-white w-10/12'>
          <div>
            <h2>⚡Course Upload Tips</h2>
          </div>
          <ul className='list-disc leading-8 ps-2 pt-4'>
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
            <li>Information from the Additional Data section shows up on the course single page.</li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
          </ul>
        </div>
      </div>
    </div>
    {/* // </> */}
    </div>
    </div>
  )
}

export default UploadCourse
