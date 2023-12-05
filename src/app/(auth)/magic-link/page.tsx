import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import MagicLinkForm from "./magic-link-form";

const SignIn = () => {
  return (
    <section className="flex h-full px-10 md:px-0 pt-16 justify-center items-center">
      <div className="flex flex-col gap-8">
        <div className="relative w-16 h-8">
          <Image src="/svg/logo.svg" alt="logo" fill className="" />
        </div>
        <div>
          <h2 className="font-bold font-Inter text-5xl">
            Sign In to your{" "}
            <span className="font-Inter font-bold text-gradient">Account</span>{" "}
          </h2>
          <span className="text-center text-muted-foreground font-Inter text-sm font-light">
            Please Log In to your account and start journey with us
          </span>
        </div>
        <MagicLinkForm />
      </div>
    </section>
  );
};

export default SignIn;
