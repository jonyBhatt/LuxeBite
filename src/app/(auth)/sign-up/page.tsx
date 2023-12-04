import Image from "next/image";
import React from "react";

import Link from "next/link";
import SignUpForm from "./sign-up-form";
const SignUp = () => {
  return (
    <section className="flex h-full pt-11 justify-center items-center">
      <div className="flex flex-col gap-8">
        <div className="relative w-16 h-8">
          <Image src="/svg/logo.svg" alt="logo" fill className="" />
        </div>
        <div>
          <h2 className="font-bold font-Inter text-5xl">
            Welcome to{" "}
            <span className="font-Smooch font-bold text-gradient">
              Luxiebite
            </span>{" "}
          </h2>
        </div>
        <div>{<SignUpForm />}</div>
        <span className="text-sm font-light text-muted-foreground font-Inter">
          Already use Luxiebite!{" "}
          <Link
            href="/sign-in"
            className="text-primary transition-all duration-200 hover:underline font-semibold font-Inter"
          >
            Login Here
          </Link>
        </span>
        <span className="tex-sm font-light font-Inter text-center mt-14 text-muted-foreground mb-1">
          By signing up, you are creating a Luxiebite account and agree to{" "}
          <br />
          Luxiebite’s{" "}
          <span className="dark:text-white text-inherit font-bold">
            Terms
          </span>{" "}
          and{" "}
          <span className="dark:text-white text-inherit font-bold">
            Privacy Policy
          </span>
        </span>
      </div>
    </section>
  );
};

export default SignUp;
