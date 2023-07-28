import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}: { params: { id:string } } ) {

    try{
        const { id } = params;
        const email = id;
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });


        return NextResponse.json(
            { message: "Success", id: user?.id },
            { status: 200, statusText: "OK" }
        );
    }catch(error){
        return NextResponse.json(
            { message: "Error", error },
            { status: 500, statusText: "Server Error" }
        );
    }

}
