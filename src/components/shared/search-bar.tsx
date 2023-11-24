import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

const SearchBar = ({
  className,
  placeholder,
}: {
  className?: string;
  placeholder?: string;
}) => {
  return (
    <div className="w-full">
      <Input
        className={cn(className, "bg-transparent border border-primary")}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
