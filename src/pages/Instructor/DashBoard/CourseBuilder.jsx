// import Sidebar from "../../../components/Instructor/Sidebar";
import { useState, useEffect, useContext } from "react";
import { X, Plus } from "react-feather";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import { CiLineHeight } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import UploadVideo from "../../../components/Upload/UploadVideo";
import { RxCross2 } from "react-icons/rx";
import CourseContext from "../../../Context/courseContext";

export default function CourseBuilder() {
  const { courseData, setCourseData } = useContext(CourseContext);
  const [token, setToken] = useState("");
  const [newCourseID, setNewCourseID] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token:"));
    setNewCourseID(localStorage.getItem("newCourseID"));
  }, [token, newCourseID]);

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      description: e.target.value,
    });
  };
  const [showUploadPopUp, setShowUploadPopUp] = useState(false);

  const [lectures, setLectures] = useState(() => {
    const storedLectures = localStorage.getItem("lectures");
    return storedLectures
      ? JSON.parse(storedLectures)
      : [{ lecture: "Lecture-1" }];
  });

  useEffect(() => {
    localStorage.setItem("lectures", JSON.stringify(lectures));
  }, [lectures]);

  const handleAddLecture = async(lectureIndex) => {
    const newLectures = [...lectures];
    if (!newLectures[lectureIndex].subLectures) {
      newLectures[lectureIndex].subLectures = [];
    }
    const lastLecture = newLectures[lectureIndex].lecture;
    const newLecture = `${lastLecture}.${
      newLectures[lectureIndex].subLectures.length + 1
    }`;
    newLectures[lectureIndex].subLectures.push(newLecture);
    setLectures(newLectures);

    const headers = {
      Authorization: `Bearer ${token}`,
      "Account-Type": "Instructor",
    };
  
    const storedLectures = JSON.parse(localStorage.getItem('lectures'));
    const lectureId =storedLectures[lectureIndex]?.lectureId;

    const subsectionData = {
      title: `SubLecture-${lectures[lectureIndex].subLectures.length + 1}`,
      courseId: newCourseID,
      sectionId:lectureId};
  
    try {
      
      console.log("subsection data:", subsectionData)

      const response = await axios.post(
        "http://localhost:4000/api/v1/course/addSubSection",
        subsectionData,
        { headers }
      );
      console.log(response);
      
      // Optionally, you can update the local state or perform any other actions after creating the subsection
    } catch (error) {
      console.log(error);
    }
  };
  
  const addSection = async () => {
    // setLectures([
    //   ...lectures,
    //   { lecture: `Lecture-${lectures.length + 1}`, subLectures: [] },
    // ]);

    const headers = {
      Authorization: `Bearer ${token}`,
      "Account-Type": "Instructor",
    };

    const sectionData = {
      sectionName: `Lecture-${lectures.length + 1}`,
      courseId: newCourseID,
    };

    console.log("course  :  ", sectionData.courseId, 'new corse id', newCourseID);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/course/addSection",
        sectionData,
        { headers }
      );
      const newSectionId = response.data.newSection._id;

      console.log(response);
      setLectures([
        ...lectures,
        {  lectureId: newSectionId,lecture: `Lecture-${lectures.length + 1}`, subLectures: [] },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const removeSection = (lectureIndex) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this lecture?"
    );
    if (isConfirmed) {
      const newLectures = [...lectures];
      newLectures.splice(lectureIndex, 1); // Remove the section at the specified index
      setLectures(newLectures);
    }
  };

  const handleInputFocus = () => {
    setShowUploadPopUp(true);
  };
  const handleInputBlur = () => {
    setShowUploadPopUp(false);
  };

  const handleVideoUpload = (videoData) => {
    // Handle video upload data here
    console.log("Uploaded video data:", videoData);
    // You can send this data to your backend or manage it as needed
  };

  const handleDeleteLecture = (lectureIndex, subLectureIndex) => {
    const newLectures = [...lectures];
    newLectures[lectureIndex].subLectures.splice(subLectureIndex, 1);
    setLectures(newLectures);
  };

  const confirmDeleteLecture = (lectureIndex, subLectureIndex) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this lecture?"
    );
    if (isConfirmed) {
      handleDeleteLecture(lectureIndex, subLectureIndex);
    }
  };

  const handleLectureChange = (lectureIndex, newValue) => {
    const newLectures = [...lectures];
    newLectures[lectureIndex].lecture = newValue;
    setLectures(newLectures);
  };

  const handleSubLectureChange = (lectureIndex, subLectureIndex, newValue) => {
    const newLectures = [...lectures];
    newLectures[lectureIndex].subLectures[subLectureIndex] = newValue;
    setLectures(newLectures);
  };

  const confirmDeleteSubLecture = (lectureIndex, subLectureIndex) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this sub-lecture?"
    );
    if (isConfirmed) {
      const newLectures = [...lectures];
      newLectures[lectureIndex].subLectures.splice(subLectureIndex, 1);
      setLectures(newLectures);
    }
  };

  const saveLecturesToBackend = () => {
    // Make a POST request to your backend API to save the lecture data
    axios
      .post("your-backend-endpoint", lectures)
      .then((response) => {
        console.log("Lectures saved successfully:", response.data);
        // Optionally, handle any success actions here
      })
      .catch((error) => {
        console.error("Error saving lectures:", error);
        // Optionally, handle any error actions here
      });
  };

  //end of reload code
  // const [lectures, setLectures] = useState([{ lecture: 'Lecture-1' }]);

  // const handleAddLecture = (lectureIndex) => {
  //   const newLectures = [...lectures];
  //   if (!newLectures[lectureIndex].subLectures) {
  //     newLectures[lectureIndex].subLectures = [];
  //   }
  //   const lastLecture = newLectures[lectureIndex].lecture;
  //   const newLecture = `${lastLecture}.${newLectures[lectureIndex].subLectures.length + 1}`;
  //   newLectures[lectureIndex].subLectures.push(newLecture);
  //   setLectures(newLectures);
  // };

  return (
    <div className="min-h-40  flex relative">
      {/* <div className="w-[25%] min-h-screen bg-gray-800">
        <Sidebar className="fixed" />
      </div> */}

      {showUploadPopUp && (
        <div className=" bg-slate-900 bg-opacity-1 absolute inset-0 z-10 bg-opacity-60">
          <div className="z-10 absolute translate-x-[55%] flex flex-col justify-center items-center w-[100%]  border-2 bg- rounded-xl bg-grayPopUp">
            <div className="w-full px-4 rounded-xl py-2 flex justify-between text-white items-center bg-grayWhite font-bold">
              <span>Editing Lecture</span>
              <RxCross2
                className="w-6 h-6 cursor-pointer hover:text-red-600 hover:scale-125 duration-75"
                onClick={handleInputBlur}
              />
            </div>
            <UploadVideo
              onVideoUpload={handleVideoUpload}
              onClose={handleInputBlur}
              className="w-full p-1"
            />
          </div>
        </div>
      )}

      <div className="container mx-auto p-4 ">
        <div className="m-4  border border-[#2C333F] p-4 rounded-xl bg-[#161D29] ">
          <h2 className="text-2xl font-bold">Course Builder</h2>
          <div className="bg-[#2C333F] p-1 m-4 rounded-xl">
            {lectures.map((lecture, lectureIndex) => (
              <div key={lectureIndex} className="my-4 ">
                <div className="flex flex-col  justify-between m-2 relative ">
                  <div className="flex flex-col m-1 ">
                    <div className="flex gap-4">
                      <CiLineHeight className="absolute w-6 h-6  translate-y-[68%]  ml-2" />
                      <input
                        type="text"
                        className="indent-8 hover:scale-105 duration-75 cursor-pointer w-full  p-2 my-2  rounded  outline-none border-0 border-b-[1px] bg-[#2C333F] hover:border-secondaryText hover:text-secondaryText hover:bg-gray-900"
                        placeholder={`Lecture ${lectureIndex + 1}`}
                        value={lecture.lecture}
                        onChange={(e) =>
                          handleLectureChange(lectureIndex, e.target.value)
                        }
                      />
                      <X
                        className="cursor-pointer text-red-500 hover:text-red-700"
                        size={24}
                        onClick={() => removeSection(lectureIndex)}
                      />
                    </div>

                    {lecture.subLectures &&
                      lecture.subLectures.map((subLecture, subLectureIndex) => (
                        <div
                          key={subLectureIndex}
                          className="flex items-center pl-4 relative  "
                        >
                          <CiLineHeight className="absolute w-6 h-6    ml-2" />

                          <input
                            type="text"
                            className="indent-8 cursor-pointer hover:scale-105 duration-75 w-full p-2 border-0 outline-none  border-b-[1px] hover:border-yellow-200 hover:text-secondaryText hover:bg-gray-800 rounded my-1  bg-[#2C333F] "
                            placeholder={`Sub Lecture ${subLectureIndex + 1}`}
                            value={subLecture}
                            onChange={(e) =>
                              handleSubLectureChange(
                                lectureIndex,
                                subLectureIndex,
                                e.target.value
                              )
                            }
                            onFocus={handleInputFocus}
                            // onBlur={handleInputBlur}
                          />
                          <MdModeEdit
                            className="cursor-pointer hover:scale-105 duration-75 text-[#6E727F] hover:text-green-400 absolute right-10"
                            size={24}
                          />
                          <RiDeleteBinLine
                            className="cursor-pointer hover:scale-105 duration-75 text-[#6E727F] hover:text-red-600 absolute right-0"
                            size={24}
                            onClick={() =>
                              confirmDeleteSubLecture(
                                lectureIndex,
                                subLectureIndex
                              )
                            }
                          />
                        </div>
                      ))}
                  </div>
                  <div className="flex">
                    <button
                      className="text-yellow-300 hover:scale-105 duration-75 hover:text-secondaryText font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleAddLecture(lectureIndex)}
                    >
                      <Plus className="inline-block mr-2    text-yellow-300" />{" "}
                      Add Lectures
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="text-yellow-300 border border-yellow-300 hover:shadow-md hover:scale-105 duration-75 hover:shadow-secondaryText font-bold py-2 px-4 rounded"
            onClick={addSection}
          >
            <Plus className="inline-block mr-2 text-yellow-300" /> Create
            Section
          </button>
        </div>
        <div className="flex gap-4 justify-end px-4">
          {/* <button className=" border   hover:shadow-md hover:scale-105 duration-75  font-bold py-2 px-4 rounded">
            Back
          </button> */}

          <button
            className="bg-secondaryText border  border-yellow-300 hover:shadow-md hover:scale-105 duration-75 text-primaryBg font-bold py-2 px-4 rounded"
            onClick={saveLecturesToBackend}
          >
            Save Lectures
          </button>
        </div>
      </div>
    </div>
  );
}
