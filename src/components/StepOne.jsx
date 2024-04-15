import { useContext, useState } from "react";
import CourseContext from "../Context/courseContext";
import InputField from "../components/InputField";
import DropdownInputField from "./DropDownInputField";
import ThumbnailInputField from "./ThumbnailInputField";
import { MdCancel } from "react-icons/md";
import axios from "axios"; // Import Axios for making HTTP requests

const StepOne = () => {
  const { courseData, setCourseData } = useContext(CourseContext);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [filename, setFilename] = useState(false);

  
  const handleChange = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dtal6nkpi", // Replace with your Cloudinary cloud name
        uploadPreset: "dxxbduq7", // Replace with your Cloudinary upload preset
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // video: result?.info?.secure_url,
          const thumbnailData = {
                    thumbnailUrl: result.info.url // Cloudinary video URL
                  };
                  setFilename(true)
          console.log('thumbnail: ',thumbnailData.thumbnailUrl);
          
          setCourseData({...courseData, thumbnail:thumbnailData.thumbnailUrl});
          setThumbnailPreview(thumbnailData.thumbnailUrl);
        }
      }
    );
    widget.open();

  };

  const handleSave = async () => {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token:');

    // Check if token exists
    if (!token) {
        console.error("Token not found");
        return; // Exit function early
    }
  
    // Set up headers to include the token
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Account-Type': "Instructor"
    };

    try {
        // Send request with token included in headers
        const response = await axios.post("http://localhost:4000/api/v1/course/createCourse", courseData, { headers });
        console.log('response is:', response);
        localStorage.setItem("newCourseID",response.data._id);
    } catch (e) {
        // Handle errors
        console.error("Error saving course data:", e);
    }
};

  

  const removeThumbnail = () => {
    setThumbnailPreview(null);
    setFilename(false)
    document.getElementById("thumbnailInput").value = null;
  };

  const addReq = () => {
    if (courseData.requirement.trim() !== "") {
      setCourseData({
        ...courseData,
        requirements: [...courseData.requirements, courseData.requirement],
        requirement: "",
      });
    }
  };
  const addTag = () => {
    if (courseData.tag.trim() !== "") {
      setCourseData({
        ...courseData,
        tags: [...courseData.tags, courseData.tag],
        tag: "",
      });
    }
  };

  const remReq = (index) => {
    const updatedRequirements = [...courseData.requirements];
    updatedRequirements.splice(index, 1);
    setCourseData({ ...courseData, requirements: updatedRequirements });
  };

  const remTag = (index) => {
    const updatedTags = [...courseData.tags];
    updatedTags.splice(index, 1);
    setCourseData({ ...courseData, tags: updatedTags });
  };
  const categoriesOptions = [
    "Python",
    "web dev",
    "Android Development",
    "Blockchain",
    "Data Science",
    "DevOps",
    "Artificial Intelligence",
    "IOT (Internet of Things)",
    "Cloud Computing",
    "Cyber Security",
    "Machine Learning",
  "Game Development",
  "UI/UX Design",
  "Full Stack Development",
  ];


  
  return (
    <div className="grid grid-cols-1 w-12/12 bg-gray-800 p-6 rounded-lg">
      <InputField
        label="Course Title"
        type="text"
        placeholder="Enter Course Title"
        value={courseData.courseName}
        onChange={(e) =>
          setCourseData({ ...courseData, courseName: e.target.value })
        }
        name="courseName"
        required={true}
      />
      <InputField
        label="Course Short Description"
        type="text"
        placeholder="Enter Description"
        value={courseData.courseDescription}
        onChange={(e) =>
          setCourseData({ ...courseData, courseDescription: e.target.value })
        }
        name="courseDescription"
        required={true}
        h={100}
      />
      <InputField
        label="Price"
        type="text"
        placeholder="₹ Enter Price"
        value={courseData.price}
        onChange={(e) =>
          setCourseData({ ...courseData, price: e.target.value })
        }
        name="price"
        required={true}
      />
       <InputField
        label="Tags"
        type="text"
        placeholder="Choose a Tag"
        value={courseData.tag || ""}
        onChange={(e) => setCourseData({ ...courseData, tag: e.target.value })}
        name="tag"
        required={true}
      />
      <div className="float-left px-1">
        <button className="text-yellow-400 font-semibold" onClick={addTag}>
         + Add
        </button>
      </div>

      <div className="mt-2 flex flex-row gap-1">
        {courseData.tags.map((req, index) => (
          <div
            key={index}
            className="flex bg-gray-900 rounded-2xl h-10 w-auto px-4 mx-1 py-4 text-yellow-400 place-items-center place-content-around "
          >
            <div className="pr-2">{req}</div>
            <MdCancel
              onClick={() => remTag(index)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>

      <DropdownInputField
        label="Category"
        options={categoriesOptions}
        value={courseData.category}
        onChange={(e) =>
          setCourseData({ ...courseData, category: e.target.value })
        }
        name="category"
        required={true}
      />
     
      {thumbnailPreview ? (
        <div className="mb-4 relative">
          <h3 className="mb-2">Course Thumbnail: {filename &&<span className="">Thumbnail uploaded</span>  }</h3>
          <img
            src={thumbnailPreview}
            alt="Thumbnail Preview"
            className="w-full h-auto"
          />
          <MdCancel
            onClick={removeThumbnail}
            className="absolute top-0 right-0 cursor-pointer text-red-500 mt-1 mr-1"
          />
        </div>
      ) : (
        <div className=" hover:cursor-pointer" 
         >
        <ThumbnailInputField
          label="Course Thumbnail"
          type="button"
          placeholder="Drag and Drop"
          className="hover:cursor-pointer"
          name="thumbnail"
          onClick={handleChange}
          required={true}
        /></div>
      )}
      <InputField
        label="Benefits of the Course"
        type="text"
        placeholder="Enter the Benefits of the course"
        value={courseData.benefits}
        onChange={(e) =>
          setCourseData({ ...courseData, benefits: e.target.value })
        }
        name="benefits"
        required={true}
        h={100}
      />
      
      <InputField
        label="Requirements/Instructions"
        type="text"
        placeholder="Enter the Requirements of the course"
        value={courseData.requirement || ""}
        onChange={(e) =>
          setCourseData({ ...courseData, requirement: e.target.value })
        }
        name="requirement"
        required={true}
      />
      <div className="float-left px-1">
        <button className="text-yellow-400 font-semibold" onClick={addReq}>
          + Add
        </button>
      </div>

      {/* save form */}
      <div className="flex gap-4 justify-end px-4">
        <button className=" border   hover:shadow-md hover:scale-105 duration-75  font-bold py-2 px-4 rounded">
          Cancel
        </button>

        <button
          className="bg-secondaryText border  border-yellow-300 hover:shadow-md hover:scale-105 duration-75 text-primaryBg font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="mt-2 flex flex-row gap-1">
        {courseData.requirements.map((req, index) => (
          <div
            key={index}
            className="flex bg-gray-900 rounded-2xl h-10 w-full text-yellow-400 place-items-center place-content-center "
          >
            <span className="pr-2">{req}</span>
            <MdCancel
              onClick={() => remReq(index)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepOne;
