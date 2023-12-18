import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import MenuDialog from "../menu/menu-dialogbox";
import { MenuData } from "@/lib/data/menu-data";
import Link from "next/link";
import { MenuType } from "@/types";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/category", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const Menu = async () => {
  const menuData = await getData();
  // console.log(menuData);

  return (
    <div className="my-16">
      <h2 className="text-center font-bold font-Inter text-inherit text-5xl">
        Menu
      </h2>
      <div className="mt-8 grid grid-cols-1 px-4 md:px-0 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {menuData.map((menu:MenuType) => (
          <Card key={menu.id}>
            <div className="p-4 relative">
              <Image
                src={menu.img}
                alt="burger"
                width={500}
                height={500}
                className="object-cover rounded-md"
              />
            </div>
            <Separator />
            <CardContent>
              <div className="flex justify-between items-center mt-4">
                <h2 className="font-bold text-inherit font-Inter text-lg">
                  {menu.title}
                </h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">View</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <MenuDialog
                      image={menu.img}
                      description={menu.desc}
                      price={menu.price}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
        <Link href="/menu" className={buttonVariants({ variant: "ghost" })}>
          View All
        </Link>
      </div>
    </div>
  );
};

export default Menu;
