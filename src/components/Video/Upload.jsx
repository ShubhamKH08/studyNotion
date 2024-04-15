// import Form from "./form";
// import prisma from '@prisma/client';
// import Gallery from "./gallery"

// export default async function Upload() {

//   const getvideos = async () => {
//     try {
//         const videos = await prisma.videoupload.findMany();
//         console.log(videos)
//         return videos;
//     }
//     catch (error){
//         console.error(error)
//     }
// }
//   const allvideos = await getvideos();
//   console.log('MESSAGE_BODY',allvideos);

//   return (
//     <main className="flex flex-col item-center h-screen w-screen bg-red-300 justify-center">
//         <Form />
        
//         <Gallery videos={allvideos}
//         />
//     </main>
//   );
// }

// export default function Upload() {
//   return (
//     <div>Upload</div>
//   )
// }
