import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FetchUser from "./_components/fetch-users";
const User = () => {
  return (
    <div className="py-10 ">
      <h2 className="text-4xl font-bold text-center mb-5">Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mt-10 gap-8">
        {/* <Card className=" w-[350px]">
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
            <h2 className="font-bold text-2xl">Name: John Doe</h2>
            <p className="font-semibold">Email: johndoe@gmail.com</p>
          </CardContent>
        </Card>

        <Card className=" w-[350px]">
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
            <h2 className="font-bold text-2xl">Name: John Doe</h2>
            <p className="font-semibold">Email: johndoe@gmail.com</p>
          </CardContent>
        </Card>

        <Card className=" w-[350px]">
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
            <h2 className="font-bold text-2xl">Name: John Doe</h2>
            <p className="font-semibold">Email: johndoe@gmail.com</p>
          </CardContent>
        </Card>

        <Card className=" w-[350px]">
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
            <h2 className="font-bold text-2xl">Name: John Doe</h2>
            <p className="font-semibold">Email: johndoe@gmail.com</p>
          </CardContent>
        </Card>

        <Card className=" w-[350px]">
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
            <h2 className="font-bold text-2xl">Name: John Doe</h2>
            <p className="font-semibold">Email: johndoe@gmail.com</p>
          </CardContent>
        </Card> */}
        <FetchUser />
      </div>
    </div>
  );
};

export default User;
