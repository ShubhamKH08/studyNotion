

import  { useContext } from 'react';
import CourseContext from '../Context/courseContext';
import Button from "../components/Button"

const StepThree = () => {
  const { courseData, setCourseData } = useContext(CourseContext);

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      price: e.target.value,
    });

  };

  const handleSaveAndPublish=()=>{
    console.log("Write code to publish and save the course")

  }

  const handleSaveDraft=()=>{
    console.log("Write code to save the draft.")

  }
  console.log(courseData);

  return (
    <div className='mb-12'>
      <div className="border border-[#2C333F] rounded-xl w-full h-1/2 bg-[#161D29] p-4">
      <span className='text-xl font-bold'>Publish Settings</span>
      <div className="">
        <div >
          <label htmlFor="publishCourse" className="duration-75 hover:cursor-pointer"  >
     <input type="checkbox" id="publishCourse" className='rounded bg-transparent m-4'/>
      Make this Course Public
      </label>
      </div>
      </div>

      <div className=" flex gap-4  justify-end ">
        <Button onClick={handleSaveDraft} text="Save as a Draft" className="text-white border"></Button>
        <Button onClick={handleSaveDraft} text="Save and Publish" className="bg-[#faca15]"></Button>
      </div>
      </div>
    
    </div>
  );
};

export default StepThree;
