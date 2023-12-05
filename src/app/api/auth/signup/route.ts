import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password, name } = body;

  if (email === "" && password === "") {
    throw new Error("Please provide the credential");
  }

  try {
    //check exist user
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error("User already exists");
    }

    //create new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return NextResponse.json("User create success", { status: 201 });
  } catch (error: any) {
    return NextResponse.json(error, { status: 500 });
  }
}
