import { MenuItemCard } from "@/components/card/menu/menu-card-items";
import React from "react";

 const Launch = () => {
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <h3 className="pb-1.5 border-b font-bold font-Inter text-2xl w-full">
        Launch
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-start w-full gap-x-6 gap-y-8">
        <div>
          <MenuItemCard />
        </div>
        <div>
          <MenuItemCard />
        </div>
        <div>
          <MenuItemCard />
        </div>
        <div>
          <MenuItemCard />
        </div>
        <div>
          <MenuItemCard />
        </div>
      </div>
    </div>
  );
};

export default Launch
