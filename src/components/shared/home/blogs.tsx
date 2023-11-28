import { BlogMainCard, BlogsCards } from "@/components/card";
import { EventData } from "@/lib/data/event-data";
import React from "react";

const Blogs = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1">
        <h2 className="text-6xl font-bold font-Inter">
          Latest news and events
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 col-span-2 mt-7">
        {/** Event main card */}
        <div className=" p-4 rounded-md shadow-xl bg-gray-200 dark:bg-inherit dark:shadow-none">
          <BlogMainCard />
        </div>
        <div className="flex flex-col items-start ml-6 md:ml-0 justify-center mt-8  gap-8">
          {EventData.map((event) => (
            <BlogsCards
              key={event.id}
              imageSrc={event.imageSrc}
              title={event.title}
              description={event.description}
              by={event.by}
              date={event.date}
              see={event.see}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
