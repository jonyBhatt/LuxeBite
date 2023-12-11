import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
type Props = {
  show?: boolean;
  showSideBar?: () => void;
};
const Sidebar = ({ show, showSideBar }: Props) => {
  return (
    <aside
      className={cn(
        "py-2 px-4 fixed inset-y-0 left-0 transition-all duration-150 ease-out admin-side_bar shadow-lg w-[5rem] md:w-40"
      )}
    >
      <ChevronLeft
        className={`admin-bg  hidden md:block
       rounded-full text-[#5E5E5E] shadow-lg
       absolute -right-3 top-9 z-10 cursor-pointer 
        ${!show && "rotate-180"}`}
        size={32}
        onClick={showSideBar}
      />
      <div className="flex flex-col gap-4 justify-between h-full">
        <div className="flex items-center gap-2.5">
          <div>
            <Image
              src="/image/h5"
              alt="user image"
              width={200}
              height={200}
              className="object-cover rounded-full"
            />
          </div>
          <div className=" flex-col gap-2 hidden md:flex">
            <h4 className="font-bold font-Inter text-lg">Jackson Carter</h4>
            <span className="text-sm text-muted-foreground leading-4">
              Admin
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
