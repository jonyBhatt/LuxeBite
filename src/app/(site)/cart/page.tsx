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
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { useState } from "react";

export default function Cart() {
  const [order, setOrder] = useState();
  const {
    products,
    totalItems,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();
  const handleOrder = async () => {
    try {
      // Assuming your order API endpoint is '/api/order'
      const response = await axios.post("/api/orders", {
        products,
        totalItems,
        totalPrice,
      });

      // Handle the response, e.g., show a success message
      console.log("Order placed successfully:", response.data);
      setOrder(response.data);
      toast.success("Order placed successfully");

      // Optionally, you can clear the cart after successful order
      // clearCart(); // You need to implement the clearCart function in your useCartStore
    } catch (error: any) {
      // Handle the error, e.g., show an error message
      toast.error("Error placing order");
      console.error("Error placing order:", error.message);
    }
  };
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
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <MinusIcon className="w-4 h-4" />
                  </Button>
                  <span>{totalItems}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => increaseQuantity(item.id)}
                  >
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
        {order ? (
          <>
            <Link href={`/payments/${order.id}`}>
              <Button className="mt-4 w-full" size="lg">
                Checkout
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Button className="mt-4" size="lg" onClick={handleOrder}>
              Order
            </Button>
          </>
        )}
      </div>
    </main>
  );
}
