import { useState } from "react";
import axios from "axios";
import InputField from "../InputField";


export default function UploadVideo({ onVideoUpload, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleVideoUpload = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dtal6nkpi", // Replace with your Cloudinary cloud name
        uploadPreset: "dxxbduq7", // Replace with your Cloudinary upload preset
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const videoData = {
            title,
            description,
            videoUrl: result.info.url // Cloudinary video URL
          };
          // Call the onVideoUpload callback function with the uploaded video data
          onVideoUpload(videoData);
        }
      }
    );
    widget.open();
  };

  const handleCancel = ()=>{
      onclose();
  }

  return (
    <div className="flex flex-col  mt-2 w-[11/12] p-8  rounded-xl bg-grayPopUp">
     
      <div className="popup-content">
        <label htmlFor="Video" className="relative  after:absolute after:content-['*'] after:text-red-600 after:indent-1  ">Lecture Video </label>
        <div className="w-[100%] min-h-40 rounded-xl my-2 p-2 bg-[#424854] border-dashed border-2 justify-center items-center">
        <button onClick={handleVideoUpload} className="upload-button flex justify-center items-center">
          Upload Video
        </button>
        </div>
        <InputField
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Lecture Title"
          className="input-field"
          label="Lecture Title"
        />
        <label htmlFor="duration" className="relative after:content-['*'] after:text-red-500 after:absolute after:indent-1 after:scale-125 block">Video Playback Time</label>
        <div className="flex gap-10 my-2 mb-8">
  <div className="relative">
    <input
      type="number"
      placeholder="HH"
      className="pl-4 w-full mt-1 block border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-100 sm:text-sm border-b-[2px] h-10 bg-grayPopUp text-grayText font-bold"
    />
     <label className="absolute bottom-0 left-0 translate-y-6 text-sm text-gray-400">HH</label>
  </div>
  <div className="relative">
    <input
      type="number"
      placeholder="MM"
      className="pl-4 w-full mt-1 block border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-100 sm:text-sm border-b-[2px] h-10 bg-grayPopUp text-grayText font-bold"
    />
    <label className="absolute bottom-0 left-0 translate-y-6 text-sm text-gray-400">MM</label>
  </div>
  <div className="relative">
    <input
      type="number"
      placeholder="SS"
      className="pl-4 w-full mt-1 block border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-100 sm:text-sm border-b-[2px] h-10 bg-grayPopUp text-grayText font-bold"
    />
    <label className="absolute bottom-0 left-0 translate-y-6 text-sm text-gray-400">SS</label>
  </div>
</div>

        <label htmlFor="duration" className="relative after:content-['*'] after:text-red-500 after:absolute after:indent-1 after:scale-125">Lecture Description </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Lecture Description"
          rows={3}
          className="input-field pl-4 w-full  mt-1 block border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-100 sm:text-sm border-b-[2px] bg-grayPopUp text-grayText font-bold"
        ></textarea>
       
      </div>
      <div className="">
      <InputField 
      label=""/>
      </div>
      <div className="flex gap-4 justify-end my-5">
          <button className=" border   hover:shadow-md hover:scale-105 duration-75  font-bold py-2 px-4 rounded" onClick={handleCancel}>
            Cancel
          </button>

          <button
            className="bg-secondaryText border  border-yellow-300 hover:shadow-md hover:scale-105 duration-75 text-primaryBg font-bold py-2 px-4 rounded"
            // onClick={saveLecturesToBackend}
          >
            Save Edits
          </button>
          
        </div>
    </div>
  );
}
