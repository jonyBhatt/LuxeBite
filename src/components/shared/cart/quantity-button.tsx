import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const QuantityButton = ({quantity}:{quantity:number}) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer">
        <Plus />
      </div>
          <span className="font-Inter font-bold text-xl">{ quantity}</span>
      <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center cursor-pointer">
        <Minus />
      </div>
    </div>
  );
};

export default QuantityButton;
