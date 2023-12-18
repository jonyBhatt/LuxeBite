import { MenuItemCard } from "@/components/card/menu/menu-card-items";
import { MenuData } from "@/lib/data/menu-data";
import React from "react";



const BreakFast = () => {
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <h3 className="pb-1.5 border-b font-bold font-Inter text-2xl w-full">
        Break Fast
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-start w-full gap-x-6 gap-y-8">
        {MenuData.map((menu) => (
          <div key={menu.id}>
            <MenuItemCard desc={menu.desc} title={menu.title} image={menu.image} id={menu.id} />
          </div>
        ))}

      </div>
    </div>
  );
};

export default BreakFast;
