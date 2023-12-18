"use client";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
            className={` py-4 container  ${
              isSticky ? "fixed inset-x-0  top-4 z-50" : ""
            }  mx-auto w-full bg-slate-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-sm dark:shadow-zinc-400/50 `}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Link href={"/"} className="relative w-16 h-8">
                  <Image src="/svg/logo.svg" alt="logo" fill className="" />
                </Link>
                {/* <div className="hidden md:block">Search Bar</div> */}
              </div>
              <div className="flex items-center gap-2">
                <Link href="/">Home</Link>
                <span>Products</span>
                <span>Blog</span>
                <Link href="/menu">Menu</Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {status === "authenticated" ? (
                    <>
                      <Popover>
                        <PopoverTrigger asChild className="cursor-pointer">
                          {/* <p className="font-bold text-inherit text-2xl font-Inter">
                            {session.user?.name}
                          </p> */}
                          <div>
                            <Image
                              src="/image/h5.jpg"
                              alt="user"
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="flex flex-col items-start gap-4 w-full">
                            <Link
                              href="/cart"
                              className="border-b border-b-gray-500 w-full font-Inter pb-1 flex gap-1.5 items-center"
                            >
                              Cart <ShoppingCart />
                            </Link>
                            <Link
                              href="/me"
                              className="border-b border-b-gray-500 w-full font-Inter pb-1"
                            >
                              Profile
                            </Link>

                            {session.user.isAdmin && (
                              <Link
                                href="/admin-dashboard"
                                className="border-b border-b-gray-500 w-full font-Inter pb-1"
                              >
                                Admin Dashboard
                              </Link>
                            )}

                            <Link
                              href="/order"
                              className="border-b border-b-gray-500 w-full font-Inter pb-1"
                            >
                              Order
                            </Link>

                            <Button onClick={() => signOut()} size="lg">
                              Log out
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
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
