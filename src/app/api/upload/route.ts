
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(
    request:Request,
){
    try{
        const body = await request.json();
        const {
            video,
            name
        } = body;

        console.log('MESSAGE_BODY',body);


        const newVideo = await prisma.videoupload.create({
            data: {
                url: video,
                name: name,
                },
        });

        console.log('NEW_MESSAGE',newVideo);

        
        return NextResponse.json(newVideo,{status:201});

    } catch (error:any){
        console.error(error,'ERROR_MESSAGES');
        return new NextResponse('InternalError',{status:500});
    }
}



