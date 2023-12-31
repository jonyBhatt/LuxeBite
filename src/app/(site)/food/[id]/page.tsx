import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import OrderFood from "../_components/order-section";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/food/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

export default async function SingleFood({
  params,
}: {
  params: { id: string };
}) {
  const singleProduct = await getData(params.id);
  console.log(singleProduct);
  return (
    <main className="max-w-full mx-auto p-8 md:p-12 lg:p-16 container">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl lg:text-4xl mb-4">
              {singleProduct.title}
            </h1>
            <p className="mb-4">{singleProduct.desc}</p>
          </div>
          <Badge className="h-6 px-2 text-sm bg-gradient-to-r from-purple-800 to-blue-600 w-fit">
            {singleProduct.catSlug}
          </Badge>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">Price: $ {singleProduct.price}</span>
          </div>
          <OrderFood product={singleProduct} />
        </div>
        <div>
          <div className="border border-gray-200 w-full rounded-lg overflow-hidden flex justify-center items-center">
            <Image
              alt="Delicious Food Image"
              className="aspect-[1/1] object-cover"
              height="500"
              src={singleProduct.img}
              width="500"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export function MinusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

export function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
