import Image from "next/image";
import React from "react";
import { SubsCribe } from "../../../../public/svg/subs-cribe";
import SubsCribeInput from "./subscribe-input";

const Subscribe = () => {
  return (
    <div className="container mt-20 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <SubsCribe />
          <SubsCribeInput />
    </div>
  );
};

export default Subscribe;
