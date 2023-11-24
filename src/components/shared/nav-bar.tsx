"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setIsSticky((prevIsSticky) => (window.scrollY > 100 ? true : false));
      console.log("isSticky:", isSticky);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);
  return (
    <nav className={`py-2 px-4 my-4  `}>
      <div
        className={` py-4 container   ${
          isSticky ? "fixed w-full top-4 z-50" : ""
        }  mx-auto w-full bg-slate-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-sm dark:shadow-zinc-400/50 `}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-8">
              <Image src="/svg/logo.svg" alt="logo" fill className="" />
            </div>
            <div className="hidden md:block">Search Bar</div>
          </div>
          <div className="flex items-center gap-2">
            <span>Home</span>
            <span>Products</span>
            <span>Blog</span>
            <span>About</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <div className=" flex items-center">
                <Link href="#">Login / Register</Link>
              </div>
              <div className="mx-4 hidden md:flex  h-7 border-r border-r-gray-500" />
              <div className="hidden md:flex">Order Now</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
