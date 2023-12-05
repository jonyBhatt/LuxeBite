import Image from "next/image";
import React from "react";
import SignInForm from "./sign-in-form";
import Link from "next/link";

const SignIn = () => {
  return (
    <section className="flex h-full px-10 md:px-0 pt-16 justify-center items-center">
      <div className="flex flex-col gap-8">
        <div className="relative w-16 h-8">
          <Image src="/svg/logo.svg" alt="logo" fill className="" />
        </div>
        <div>
          <h2 className="font-bold font-Inter text-5xl">
            Welcome back{" "}
            <span className="font-Smooch font-bold text-gradient">
              Luxiebite
            </span>{" "}
          </h2>
          <div className="flex justify-between items-center mt-4">
            <span className="text-center text-muted-foreground font-Inter text-sm font-light">
              Please Log In to your account
            </span>
            <Link
              href="/magic-link"
              className="text-primary transition-all duration-200 hover:underline font-semibold font-Inter"
            >
              Login with magic link
            </Link>
          </div>
        </div>
        <div>
          <SignInForm />
        </div>
        {/* <span className="tex-sm font-light font-Inter text-center mt-14 text-muted-foreground">
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
        </span> */}
        <span className="text-sm font-light text-muted-foreground">
          New to Luxiebite?{" "}
          <Link
            href="/sign-up"
            className="text-primary transition-all duration-200 hover:underline font-semibold font-Inter"
          >
            Register Here
          </Link>
        </span>
      </div>
    </section>
  );
};

export default SignIn;
