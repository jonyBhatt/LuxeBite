import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Eye, User } from "lucide-react";
import { Separator } from "../ui/separator";
import { CalenderDays } from "../../../public/svg/calender-days";

const BlogMainCard = () => {
  return (
    <Card className="dark:bg-[#060f275a] bg-gray-200 md:w-[500px] xs:w-[200px] sm:w-fit">
      <div className="relative p-5 ">
        <Image
          src="/image/event1.jpg"
          alt="event1"
          width={500}
          height={500}
          className="object-cover object-center rounded-2xl"
        />
      </div>
      <CardHeader>
        <CardTitle>
          We Have Received An Award For The Quality Of Our Work
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 items-start">
        <span>
          Donec adipiscing tristique risus nec feugiat in fermentum. Sapien eget
          mi proin sed libero. Et magnis dis parturient montes nascetur.
          Praesent semper feugiat nibh sed pulvinar proin gravida.
        </span>
        <Link
          href="#"
          className="transition-all duration-300 ease-in hover:text-blue-600 hover:underline"
        >
          Read More &rarr;
        </Link>
      </CardContent>
      <Separator className="dark:text-gray-200 text-gray-700 container mx-auto" />
      <CardFooter className="flex items-center mt-4 justify-start gap-8">
        <div className="flex items-center gap-1.5">
          <User className="w-4 h-4 dark:text-gray-700 text-gray-400" />
          <span className="text-sm font-bold font-Inter text-gray-400 dark:text-inherit">
            by: LuxieBite
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <CalenderDays className="w-4 h-4 dark:text-gray-700 text-gray-400" />
          <span className="text-sm font-bold font-Inter text-gray-400 dark:text-inherit">
            1 Jan 2022
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <Eye className="w-4 h-4 dark:text-gray-700 text-gray-400" />
          <span className="text-sm font-bold font-Inter text-gray-400 dark:text-inherit">
            132
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogMainCard;
