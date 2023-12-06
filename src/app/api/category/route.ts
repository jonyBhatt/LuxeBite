import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const cat = await prisma.categories.findMany();
    return new NextResponse(JSON.stringify(cat), { status: 500 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
};
