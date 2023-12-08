import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ShortMenuType } from "@/types";
import Image from "next/image";

const MenuDialog = ({ image, description, price }: ShortMenuType) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Image
          src={image}
          alt="burger"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <span className="text-xs font-Inter font-light text-gray-400">
        {description}
      </span>

      <h2 className="text-center font-bold font-Inter text-lg">
        Special Instructions
      </h2>
      <div>
        <Textarea
          rows={5}
          className="ring-1 ring-primary focus-visible:ring-1"
        />
      </div>
      <Button size={"lg"} className="w-full font-semibold font-Inter">
        Add to cart ${price}
      </Button>
    </div>
  );
};

export default MenuDialog;
