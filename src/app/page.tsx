import Form from "@/components/form";
import prisma from '@/app/libs/prismadb';
import Gallery from "@/components/gallery";

export default async function Home() {

const getvideos = async () => {
    try {
        const videos = await prisma.videoupload.findMany();
        return videos;
    }
    catch (error: any) {
        return [];
    }
}
  const allvideos = await getvideos();
  console.log('MESSAGE_BODY',allvideos);

  return (
    <main className="flex flex-col item-center jutify-center">
        <Form />
        
        <Gallery videos={allvideos}
        />
    </main>
  );
}
