"use client";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "../food/[id]/page";
import { Trash2Icon } from "lucide-react";
import { CartData } from "@/lib/data/cart-data";
import { useCartStore } from "@/utils/store";

export default function Cart() {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  return (
    <main className="container py-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Image</TableHead>
            <TableHead className="w-[240px]">Title</TableHead>
            <TableHead className="w-[80px]">Quantity</TableHead>
            <TableHead className="w-[80px]">Price</TableHead>
            <TableHead className="w-[80px]">Total</TableHead>
            <TableHead className="w-[80px]">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length <= 0 && <p>No foods yet!</p>}
          {products.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                {item.img ? (
                  <>
                    <Image
                      alt="Product image"
                      className="aspect-square rounded-full object-cover"
                      height="64"
                      src={item.img}
                      width="64"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      alt="Product image"
                      className="aspect-square rounded-full object-cover"
                      height="64"
                      src="/image/food/burger.png"
                      width="64"
                    />
                  </>
                )}
              </TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <MinusIcon className="w-4 h-4" />
                  </Button>
                  <span>{totalItems}</span>
                  <Button size="icon" variant="outline">
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{totalPrice}</TableCell>
              <TableCell>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => removeFromCart(item)}
                >
                  <Trash2Icon className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex justify-between">
          <span>Discount:</span>
          <span>- $0</span>
        </div>
        <div className="flex justify-between">
          <span>Service Fee:</span>
          <span>$10</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee:</span>
          <span>$5</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>$ {totalPrice}</span>
        </div>
        <Button className="mt-4" size="lg">
          Checkout
        </Button>
      </div>
    </main>
  );
}
