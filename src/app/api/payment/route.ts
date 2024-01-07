import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const pay = await prisma.payment.findMany();
    if (pay.length <= 0)
      return new NextResponse("No payment yet", { status: 200 });
    return new NextResponse(JSON.stringify(pay), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
