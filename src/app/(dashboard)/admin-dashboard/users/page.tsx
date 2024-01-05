import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FetchUser from "./_components/fetch-users";
const User = () => {
  return (
    <div className="py-10 ">
      <h2 className="text-4xl font-bold text-center mb-5">Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mt-10 gap-8">
        <FetchUser />
      </div>
    </div>
  );
};

export default User;
