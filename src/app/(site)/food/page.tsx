"use client";

import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { MenuType } from "@/types";

export default function Food() {
  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/food").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
//   console.log(data);

  return (
    <main className="p-8  text-white container">
      <div className="grid lg:grid-cols-3 gap-6">
        {data.map((menu: MenuType) => (
          <Card className="bg-[#2c2c2c]" key={menu.id}>
            <div className="flex justify-center items-center">
              <Image src={menu.img} alt="burger" width={200} height={200} />
            </div>
            <CardHeader className="bg-[#3d3d3d]">
              <h3 className="text-xl font-bold ">{menu.title}</h3>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-gray-400">{menu.desc}</p>
            </CardContent>
            <div className="p-4 flex justify-between items-center">
              <Badge
                className={`bg-green-500 text-white ${
                  menu.catSlug === "meals"
                    ? "bg-orange-500"
                    : menu.catSlug === "bbq"
                    ? "bg-red-500"
                    : menu.catSlug === "drinks"
                    ? "bg-blue-400"
                    : menu.catSlug === "meat"
                    ? "bg-violet-500"
                    : menu.catSlug === "beverages"
                    ? "bg-cyan-500"
                    : "bg-green-500"
                }`}
              >
                {menu.catSlug}
              </Badge>
              <Link className="underline text-white" href={`/food/${menu.id}`}>
                More Info
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

{
  /**
    menu data -> menu content
*/
}
