import { Button } from "@/components/ui/button";

const CartDetails = () => {
  return (
    <div className="mt-4 font-Inter">
      {/** Small device */}
      <div className="md:hidden">
        <div className="flex items-center gap-4">
          {/** sub total */}
          <div className="flex flex-col gap-1.5 items-start">
            <h3 className="font-bold text-lg font-Inter">Subtotal :</h3>
            <span className="font-Inter">$ 35</span>
          </div>

          {/** discount */}
          <div className="flex flex-col gap-1.5 items-start">
            <h3 className="font-bold text-lg font-Inter">Discount :</h3>
            <span>$ 5</span>
          </div>

          {/** Service fee */}
          <div className="flex flex-col gap-1.5 items-start">
            <h3 className="font-bold text-lg font-Inter">Service fee :</h3>
            <span>$ 2.5</span>
          </div>

          {/** Delivery fee */}
          <div className="flex flex-col gap-1.5 items-start">
            <h3 className="font-bold text-lg font-Inter">Delivery fee :</h3>
            <span>$ 3</span>
          </div>

          {/** Total fee */}
          <div className="flex flex-col gap-1.5 items-start">
            <h3 className="font-bold text-lg font-Inter">Total :</h3>
            <span>$ 50</span>
          </div>
        </div>

        <Button className="w-full my-6" size={"lg"}>
          Buy
        </Button>
      </div>
      {/** Desktop device */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-8 place-items-center justify-items-center">
          <div className="flex items-center gap-1">
            <h3 className="font-bold">Subtotal :</h3>
            <span>$35</span>
          </div>

          <div className="flex items-center gap-1">
            <h3 className="font-bold">Discount :</h3>
            <span>$5</span>
          </div>

          <div className="flex items-center gap-1">
            <h3 className="font-bold">Service fee :</h3>
            <span>$5</span>
          </div>

          <div className="flex items-center gap-1">
            <h3 className="font-bold">Delivery fee :</h3>
            <span>$2.5</span>
          </div>
          <div className="flex items-center gap-1">
            <h3 className="font-bold">Total :</h3>
            <span>$37.5</span>
          </div>
        </div>
        <Button className="w-full my-6" size={"lg"}>
          Buy
        </Button>
      </div>
      <span className="text-sm flex items-center justify-center text-center text-muted-foreground mt-4">
        Cart details
      </span>
    </div>
  );
};

export default CartDetails;
