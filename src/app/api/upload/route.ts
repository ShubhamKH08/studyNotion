
// import { NextResponse } from "next/server";
// import prisma from "@/app/libs/prismadb";

// export async function POST(
//     request:Request,
// ){
//     try{
//         const body = await request.json();
//         const {
//             video,
//             name
//         } = body;

//         console.log('MESSAGE_BODY',body);


//         const newVideo = await prisma.videoupload.create({
//             data: {
//                 url: video,
//                 name: name,
//                 },
//         });

//         console.log('NEW_MESSAGE',newVideo);

        
//         return NextResponse.json(newVideo,{status:201});

//     } catch (error:any){
//         console.error(error,'ERROR_MESSAGES');
//         return new NextResponse('InternalError',{status:500});
//     }
// }

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const body = JSON.parse(req.body);
            const { video, name } = body;

            console.log('MESSAGE_BODY', body);

            const newVideo = await prisma.videoupload.create({
                data: {
                    url: video,
                    name: name,
                },
            });

            console.log('NEW_MESSAGE', newVideo);

            res.status(201).json(newVideo);
        } catch (error) {
            console.error(error, 'ERROR_MESSAGES');
            res.status(500).send('Internal Error');
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
}


