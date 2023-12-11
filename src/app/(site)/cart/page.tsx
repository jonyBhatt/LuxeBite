import React from "react";

import ItemDetails from "@/components/shared/cart/item-details";
import CartDetails from "@/components/shared/cart/cart-details";
const Cart = () => {
  return (
    <section className="my-16 container mx-auto font-Inter ">
      <h1 className="text-2xl font-bold text-center md:text-start my-8">
        Cart
      </h1>
      <div className="flex items-start  flex-col md:flex-row gap-7 justify-between">
        {/** Item details table */}
        <div className="flex md:w-2/3  w-full">
          <ItemDetails />
        </div>
        {/** Cart details */}
        <div className="flex flex-1">
          <CartDetails />
        </div>
      </div>
    </section>
  );
};

export default Cart;
