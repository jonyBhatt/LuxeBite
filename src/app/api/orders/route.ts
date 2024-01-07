import { NextRequest, NextResponse } from "next/server";

import { authSession } from "@/utils/auth";
import prisma from "@/lib/db";

// FETCH ALL ORDERS
export const GET = async (req: NextRequest) => {
  const session = await authSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = await prisma.order.findMany({
        where: {
          userId: session.user.id!,
        },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};

// CREATE ORDER
export const POST = async (req: NextRequest) => {
  const session = await authSession();
  const body = await req.json();
  const { products, totalPrice, totalItems } = body;

  if (session) {
    try {
      const order = await prisma.order.create({
        data: {
          price: totalPrice,
          products,
          status: "Pending",
          quantity: totalItems.toString(),
          user: {
            connect: {
              email: session.user.email!,
            },
          },
        },
      });
      return new NextResponse(JSON.stringify(order), { status: 201 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};
