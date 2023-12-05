import Image from "next/image";
import React from "react";

const Verify = () => {
  return (
    <section className="flex h-full px-10 md:px-0 pt-16 justify-center items-center">
      <div className="flex flex-col gap-8 items-center">
        <div className="relative w-16 h-8">
          <Image src="/svg/logo.svg" alt="logo" fill className="" />
        </div>
        <div className="flex items-center flex-col gap-5">
          <h2 className="font-bold font-Inter text-5xl">
            Please check your{" "}
            <span className="font-Inter font-bold text-gradient">Email</span>{" "}
          </h2>
          <span className="text-center text-muted-foreground font-Inter text-lg font-light">
            We provide you a link that you can log in
          </span>
        </div>
      </div>
    </section>
  );
};

export default Verify;
