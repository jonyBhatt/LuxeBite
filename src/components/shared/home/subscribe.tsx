import Image from "next/image";
import React from "react";
import { SubsCribe } from "../../../../public/svg/subs-cribe";
import SubsCribeInput from "./subscribe-input";

const Subscribe = () => {
  return (
    <div className="container mt-20 flex flex-col  items-center justify-center gap-4">
      <h2 className="text-5xl font-bold font-Inter text-center mb-8">Get the menu of your favorite restaurants every day</h2>
      <Image
        src="/svg/subscribe.svg"
        alt="subscribe"
        width={800}
              height={300}
              className="object-cover object-center"
      />
      <SubsCribeInput />
    </div>
  );
};

export default Subscribe;
