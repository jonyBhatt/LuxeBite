import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cat = await prisma.categories.findMany();
    return new NextResponse(JSON.stringify(cat), { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
