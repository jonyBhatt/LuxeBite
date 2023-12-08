"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import MenuDialog from "../menu/menu-dialogbox";
import { MenuData } from "@/lib/data/menu-data";

const Menu = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="my-16">
      <h2 className="text-center font-bold font-Inter text-inherit text-5xl">
        Menu
      </h2>
      <div className="mt-8 grid grid-cols-1 px-4 md:px-0 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {MenuData.map((menu) => (
          <Card key={menu.id}>
            <div className="p-4 relative">
              <Image
                src={menu.image}
                alt="burger"
                width={500}
                height={500}
                className="object-cover rounded-md"
              />
              <div
                onClick={() => setActive((prev) => !prev)}
                className={`absolute top-0 ${
                  active ? "bg-transparent" : "bg-secondary"
                }  flex items-center justify-center left-0 rounded-full w-10 h-10 cursor-pointer`}
              >
                <Heart
                  className={cn(active ? "text-purple-500" : "text-white")}
                />
              </div>
            </div>
            <Separator />
            <CardContent>
              <div className="flex justify-between items-center mt-4">
                <h2 className="font-bold text-inherit font-Inter text-xl">
                  {menu.title}
                </h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">View</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <MenuDialog image={menu.image} description={menu.longDescr} price={menu.price} />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Menu;
