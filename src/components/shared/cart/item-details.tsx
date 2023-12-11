import Image from "next/image";
import { Trash } from "lucide-react";
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

import QuantityButton from "./quantity-button";

const ItemDetails = () => {
  return (
    <div>
      <Table className="w-full">
        <TableCaption>Item details</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Added Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-left">Price</TableHead>
            <TableHead className="">Total</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CartData.map((cart) => (
            <TableRow key={cart.id}>
              <TableCell>
                <Image
                  src={cart.image}
                  alt="burger"
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </TableCell>
              <TableCell>
                <h2 className="text-lg">{cart.title}</h2>
              </TableCell>
              <TableCell>
                <QuantityButton quantity={cart.quantity} />
              </TableCell>
              <TableCell className="text-lg">
                <span>$ {cart.price}</span>
              </TableCell>
              <TableCell className="text-lg">
                <span>$ {cart.price * cart.quantity}</span>
              </TableCell>
              <TableCell className="text-lg text_center text-red-500 cursor-pointer ">
                <Trash />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ItemDetails;
