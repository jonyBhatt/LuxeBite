import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CartData } from "@/lib/data/cart-data";
import Image from "next/image";
const UserOrder = () => {
  return (
    <div className="my-10">
      <h2 className="font-bold text-3xl tracking-wide">Order</h2>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CartData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Image
                  src={item.image}
                  alt="burger"
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell className="text-center">
                <span>{item.quantity}</span>
              </TableCell>
              <TableCell>
                <Button variant={"destructive"}>Cancel</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserOrder;
