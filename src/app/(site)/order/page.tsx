"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { OrderType } from "@/types";
import UpdateStatus from "./_components/update-status";
const Order = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/sign-in");
  }

  const { isPending, error, data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetch("/api/orders").then((res) => res.json()),
  });

  if (isLoading || status === "loading") return "Loading....";

    if (data.length <= 0) return "No orders yet!";
    console.log(data);
    
  return (
    <section className="container font-Inter">
      <Table>
        <TableHeader className="fot-bold dark:text-white">
          <TableRow>
            <TableHead className="text-white">Order ID</TableHead>
            <TableHead className="text-white">Date</TableHead>
            <TableHead className="text-white">Price</TableHead>
            <TableHead className=" text-white">Foods</TableHead>
            <TableHead className=" text-white">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: OrderType) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell> {item.createAt.slice(0, 10)}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell className="">{item.foods[0].title}</TableCell>
              {session?.user.isAdmin ? (
                <>
                  <TableCell>
                    <UpdateStatus status={item.status} id={item.id} />
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell className="">{item.status}</TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Order;
