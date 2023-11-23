import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-2 px-4  container mx-auto">
      <div className="h-full py-4 container mx-auto w-full bg-slate-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-sm dark:shadow-zinc-400/50 ">
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
              <div className="hidden md:flex">Book Table</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
