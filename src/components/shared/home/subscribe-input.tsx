import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubsCribeInput = () => {
  return (
    <div className="mt-6 w-full flex  gap-4 items-center lg:mt-0">
      <Input placeholder="your email..." className="py-8" />
      <Button size={"lg"}>Subscribe</Button>
    </div>
  );
};

export default SubsCribeInput;
