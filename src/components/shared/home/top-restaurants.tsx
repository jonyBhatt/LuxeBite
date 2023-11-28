import RestaurantCard from "@/components/card/resturant-card";
import { Button } from "@/components/ui/button";
import { restaurantData } from "@/lib/data/resturant-data";
import Image from "next/image";

const TopRestaurants = () => {
  return (
    <div className="container mx-auto pt-20 relative">
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 justify-items-start">
        <div className="flex flex-col justify-start items-start col-span-2 md:col-span-1 w-full gap-4">
          <h1 className="text-5xl  font-Inter font-bold">
            12 Best Restaurants <br /> in Your City
          </h1>
          <p className="text-lg font-Inter text-muted-foreground">
            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
            tellus in metus vulputate.
          </p>
        </div>
        {restaurantData.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-gray-50 col-span-2 md:col-span-1 w-[350px] md:w-full gap-y-7 md:gap-y-5  dark:bg-[#060f275a] hover:ring-1 p-6 rounded-md"
          >
            <RestaurantCard
              title={restaurant.title}
              tags={restaurant.tags}
              content={restaurant.content}
              imageUrl={restaurant.imageUrl}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center">
        <Button size="lg">See All &rarr;</Button>
      </div>
    </div>
  );
};

export default TopRestaurants;
