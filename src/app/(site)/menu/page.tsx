import React from "react";
import { BreakFast, Burger, Desert, Launch } from "./_components";

const menuData = {
  title: "",
  img: "",
  content: [
    {
      name: "",
      description: "",
      review: "",
    },
  ],
};

const Menu = () => {
  return (
    <div className="my-16 container">
      <div className="flex justify-end my-8">
        Search Bar
      </div>
      <div className="flex flex-col gap-14 items-start">
        {/** Break Fast */}
        <BreakFast />
        {/** Launch */}
        <Launch />
        {/** Desert */}
        <Desert />
        {/** Burgers */}
        <Burger />
        {/** Pizza */}
      </div>
    </div>
  );
};

export default Menu;

{
  /**
    menu data -> menu content
*/
}
