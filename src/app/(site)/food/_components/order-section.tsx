"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "../[id]/page";
import { CartItemType, ProductType } from "@/types";
import { useCartStore } from "@/utils/store";

const OrderFood = ({ product }: { product: ProductType }) => {
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.price);

  const handleCart = () => {
    addToCart({
      id: product.id,
      img: product.img,
      price: price,
      quantity: quantity,
      title: product.title,
    });
  };

  useEffect(() => {
    setPrice(quantity * product.price);
  }, [setPrice, quantity, product.price]);

  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <span className="mr-2">Quantity:</span>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
        >
          <MinusIcon className="w-5 h-5" />
          <span className="sr-only">Decrease Quantity</span>
        </Button>
        <span>{quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
        >
          <PlusIcon className="w-5 h-5" />
          <span className="sr-only">Increase Quantity</span>
        </Button>
      </div>
      <h3 className="text-2xl font-bold">Total : ${price}</h3>
      <div className="w-full mb-4">
        <Button
          className="w-full"
          variant={"default"}
          size="lg"
          onClick={handleCart}
        >
          Order
        </Button>
      </div>
    </>
  );
};

export default OrderFood;
