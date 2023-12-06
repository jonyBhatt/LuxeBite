"use client";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { data: session, status } = useSession();
  useEffect(() => {
    // console.log(session?.user);

    const handleScroll = () => {
      // console.log(window.scrollY);
      setIsSticky((prevIsSticky) => (window.scrollY > 100 ? true : false));
      // console.log("isSticky:", isSticky);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);
  return (
    <nav className={`py-2 px-4 my-4 container mx-auto  `}>
      {status === "loading" ? (
        <>
          <p>Loading....</p>
        </>
      ) : (
        <>
          <div
            className={` py-4 container   ${
              isSticky ? "fixed inset-x-0  top-4 z-50" : ""
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
                <Link href="/menu">Menu</Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {status === "authenticated" ? (
                    <>
                      <p className="font-bold text-white text-2xl font-Inter">
                        {session.user?.name}
                      </p>
                      <Button onClick={() => signOut()}>Log out</Button>
                    </>
                  ) : (
                    <>
                      <div className=" flex items-center">
                        <Link href="/sign-in">Login / Register</Link>
                        <div className="mx-4 hidden md:flex  h-7 border-r border-r-gray-500" />
                        <div className="hidden md:flex">Order Now</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
