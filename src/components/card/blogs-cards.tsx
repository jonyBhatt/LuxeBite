import Image from "next/image";
import { Separator } from "../ui/separator";
import { Eye, User } from "lucide-react";
import { CalenderDays } from "../../../public/svg/calender-days";

type TBlogsCards = {
    imageSrc: string,
    title: string,
    description: string,
    by: string,
    date: string,
    see:string
}

const BlogsCards = ({
    imageSrc,
    title,
    description,
    by,
    date,
    see
}:TBlogsCards) => {
  return (
    <div className="flex lg:w-[700px] flex-col  items-start md:items-center gap-4">
      <div className="relative">
        <Image
          src={imageSrc}
          alt="event2"
          width={500}
          height={500}
          className="object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
        <Separator className="dark:text-gray-200" />
        <div className="flex items-center  justify-start gap-8">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 dark:text-gray-700 text-gray-400" />
            <span className="text-sm font-bold font-Inter text-gray-400 dark:text-inherit">
              by: {by}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <CalenderDays className="w-4 h-4 dark:text-gray-700 text-gray-400" />
            <span className="text-sm font-bold font-Inter text-gray-400 dark:text-inherit">
             {date}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4 dark:text-gray-700 text-gray-400" />
            <span className="text-sm font-bold font-Inter text-gray-400 dark:text-inherit">
              {see}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCards;
