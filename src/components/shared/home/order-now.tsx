"use client";

import { Button } from "@/components/ui/button";
import SearchBar from "../search-bar";
import { motion } from "framer-motion";
const OrderNow = () => {
  return (
    <motion.div
      initial={{
        y: "100%",
      }}
      animate={{
        y: "0%",
      }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
      className="container mx-auto  py-10 mt-12 "
    >
      <div className=" py-10 px-10 w-full flex items-center gap-4  rounded-lg shadow-xl dark:shadow-slate-800">
        <SearchBar className="w-full py-8" placeholder="Search for order..." />
        <Button className="bg-accent" size={"lg"}>
          Order
        </Button>
      </div>
    </motion.div>
  );
};

export default OrderNow;
