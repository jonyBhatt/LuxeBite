"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const MagicLinkForm = () => {
  const [email, setEmail] = useState<null | string>(null);
  const router = useRouter();

  async function SignInWithEmail(e: FormEvent) {
    e.preventDefault();
    const signInResult = await signIn("email", {
      email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    console.log(signInResult);
    router.push("/verify-link");
  }

  return (
    <form
      onSubmit={SignInWithEmail}
      className="flex flex-col gap-4 items-start max-w-md"
    >
      <div className="w-full">
        <Label className="text-2xl">Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="name@example.com"
          required
          className="w-full mt-2"
        />
      </div>
      <Button
        type="submit"
        size={"lg"}
        className="w-full font-semibold font-Inter"
      >
        Login with Email{" "}
      </Button>
    </form>
  );
};

export default MagicLinkForm;
