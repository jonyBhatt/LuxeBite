"use client";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { ProductType, paymentType } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function Component() {
  const { isPending, error, data } = useQuery({
    queryKey: ["payments"],
    queryFn: () => fetch("/api/payment").then((res) => res.json()),
  });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-14 items-center px-4 border-b">
        <h1 className="text-lg font-semibold">Payment Information</h1>
        <div className="relative ml-auto w-64">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            className="w-full bg-white shadow-none appearance-none pl-8"
            placeholder="Search payments"
            type="search"
          />
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Payment ID</TableHead>
              <TableHead className="w-[150px]">Customer Name</TableHead>
              <TableHead className="w-[150px]">Payment Date</TableHead>
              <TableHead className="w-[150px]">Order ID</TableHead>
              <TableHead className="w-[150px]">Phone Number</TableHead>
              <TableHead className="w-[150px]">Address</TableHead>
              {/* <TableHead className="w-[150px] text-right">
                Payment Amount
              </TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((pay: paymentType) => (
              <TableRow key={pay.id}>
                <TableCell className="font-medium">{pay.id}</TableCell>
                <TableCell className="capitalize">{pay.name}</TableCell>
                <TableCell>{pay.createdAt.slice(0, 10)}</TableCell>
                <TableCell>{pay.orderId}</TableCell>
                <TableCell>{pay.number}</TableCell>
                <TableCell className="capitalize">{pay.address}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell className="font-medium">PAY002</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>01/02/2024</TableCell>
              <TableCell>ORD124</TableCell>
              <TableCell className="">019923456789</TableCell>
              <TableCell className="">Sylhet</TableCell>
              {/* <TableCell className="text-right">$150.00</TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">PAY003</TableCell>
              <TableCell>Michael Johnson</TableCell>
              <TableCell>01/03/2024</TableCell>
              <TableCell>ORD125</TableCell>
              <TableCell className="">019923456789</TableCell>
              <TableCell className="">Sylhet</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
