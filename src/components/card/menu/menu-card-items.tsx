import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ICardItem {
  image: string;
  title: string;
  desc: string;
  id: string;
}

export const MenuItemCard = ({ image, title, desc, id }: ICardItem) => {
  return (
    <>
      <Card>
        <div className="flex items-center justify-center">
          <Image
            src={image}
            alt="burger"
            width={250}
            height={250}
            className="object-cover rounded-md "
          />
        </div>
        <CardHeader>
          <Link href={`/menu/${title}`} className="font-bold text-lg">
            {title}
          </Link>
          <CardDescription>
            <span className="line-clamp-2 my-2">{desc}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="flex  gap-1">
              <span className="text-lg">5</span>
              <Star fill="yellow" color="yellow" />
            </div>
            <Button variant={"outline"}>Add to cart</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
