

import Image from "next/image";
import React from "react";
import MenuLink from "./menu-link";
import { AdminRoutes } from "@/utils/links-route";


const Sidebar = () => {
  return (
    <aside className="px-4 py-2 admin-side_bar h-full min-h-screen w-50 shadow-md">
      <div className="flex flex-col gap-6">
        <div className="flex items-center xs:justify-center gap-4">
          <div>
            <Image
              src="/image/h5.jpg"
              alt="profile"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <div className="hidden  md:flex flex-col gap-1.5">
            <h2 className="text-sm lg:text-xl font-bold">John Doe</h2>
            <span className="text-sm text-muted-foreground tracking-wider">
              Admin
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-8 hover:text-white">
          {AdminRoutes.map((route) => (
            <MenuLink
              url={route.url}
              Icon={route.icon}
              title={route.title}
              key={route.title}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
