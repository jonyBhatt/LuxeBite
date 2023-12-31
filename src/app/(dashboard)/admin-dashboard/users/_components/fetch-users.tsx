"use client";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const FetchUser = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  //   console.log(data);

  return (
    <>
      {data.map((user: any) => (
        <Card className=" w-[350px]" key={user.id}>
          <CardHeader>
            <div className="relative bg-blue-400">
              <div className="absolute bottom-0 flex justify-center">
                <Image
                  src="/image/h5.jpg"
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt="user profile"
                  className="rounded-full"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <h2 className="font-bold text-2xl">Name: {user.name}</h2>
            <p className="font-semibold">Email: {user.email}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default FetchUser;
