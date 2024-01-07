import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  const reqBody = await req.json();
  const {
    name,
    cardNumber,
    expiresOnMonth,
    expiresOnYear,
    cvc,
    number,
    address,
  } = reqBody;

  try {
    const pay = await prisma.payment.create({
      data: {
        name,
        cardNumber,
        expiresOnMonth,
        expiresOnYear,
        cvc,
        address,
        number,
        orderId: id,
      },
    });
    return NextResponse.json(
      { message: "Payment successful" },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message: "Something went wrong in payment!",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
