// import React, { useState } from 'react';

// const Gallery = ({ videos }) => {
//     const [playing, setPlaying] = useState(false);

//     const handlePlayPause = () => {
//         setPlaying(!playing);
//     };

//     return (
//         <div className='grid grid-cols-4 gap-3 w-full h-full p-4'>
//             {videos.map((video, index) => (
//                 <div key={index} className='w-full'>
//                     <video className='w-full h-40' src={video.url} controls={true} autoPlay={playing} />
//                     <p className='text-center'>{video.name}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Gallery;

export default function gallery() {
  return (
    <div>gallery</div>
  )
}
