import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  try {
    const products = await prisma.product.findMany();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();
  const { title, desc, img, price, catSlug } = reqBody;
  if (!title || !desc || !img || !price || !catSlug) {
    return new NextResponse("Missing parameters", { status: 400 });
  }

  try {
    const addProduct = await prisma.product.create({
      data: {
        title,
        desc,
        price,
        img,
        category: {
          connect: {
            slug: catSlug,
          },
        },
      },
    });
    revalidatePath("/admin-dashboard/food");

    // return new NextResponse("Product added",  { status: 200 });
    return NextResponse.json(
      { revalidated: true, message: "Product Added" },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message: "Something went wrong!",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
