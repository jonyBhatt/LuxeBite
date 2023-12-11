import Image from "next/image";

import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { Input } from "@/components/ui/input";

const UserDetails = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session?.user?.name || !session?.user.email) {
    return null;
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="hover:ring hover:ring-accent rounded-full p-1">
        <Image
          src="/image/h5.jpg"
          alt="user"
          width={100}
          height={100}
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder={session?.user?.name}
          className="capitalize"
        />
        <Input type="text" placeholder={session?.user?.email} className="" />
      </div>
    </div>
  );
};

export default UserDetails;
