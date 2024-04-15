// import { useState } from "react";
// import axios from "axios";
// import InputField from "../InputField";


// export default function From() {
//   const [video, setVideo] = useState(null);

//   const handleSubmit = async (result) => {
//     try {
//       const response = await axios.post("/api/upload", {
//         video: result?.info?.secure_url,
//         name: video,
//       });
//       console.log("Upload successful:", response.data);
//     } catch (error) {
//       console.error("Error uploading video:", error);
//     }
//   };

//   const showWidget = () => {
//     let widget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: "dtal6nkpi", // Replace with your Cloudinary cloud name
//         uploadPreset: "dxxbduq7", // Replace with your Cloudinary upload preset
//       },
//       (error, result) => {
//         if (!error && result && result.event === "success") {
//           handleSubmit(result); // Call handleSubmit when upload is successful
//         }
//       }
//     );
//     widget.open();
//   };

//   return (
//     <div className="flex item-center justify-center">
//       <div className=""></div>
//       <InputField
//         value={video || ""}
//         onChange={(e) => setVideo(e.target.value)}
//         type="text"
//         placeholder="Enter Video Title"
//       />

//       <div className="item-center justify-center">
//         <button onClick={showWidget} className="p-3 bg-blue-500 text-white font-bold rounded-xl">
//           React Button Upload video
//         </button>
//       </div>
//     </div>
//   );
// }
