import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log(id);

  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log(id);

  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    //Delete product
    await prisma.product.delete({
      where: {
        id,
      },
    });

    return new NextResponse("Delete Successful", { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  const reqBody = await req.json();
  const { title, desc, img, price, catSlug } = reqBody;

  try {
    const updateProduct = await prisma.product.update({
      where: {
        id,
      },
      data: {
        title,
        desc,
        img,
        price,
        catSlug,
      },
    });

    // return new NextResponse("Product added",  { status: 200 });
    return NextResponse.json({ message: "Product Update" }, { status: 200 });
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
