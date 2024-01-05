"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon, LucideProps } from "lucide-react";

interface MenuProps {
  url: string;
  title: string;
  Icon: JSX.Element;
}

const MenuLinkIconWrapper = ({
  icon,
  className,
}: {
  icon: any;
  className: string;
}) => {
  return <span className={cn(className)}>{icon}</span>;
};

const MenuLink = ({ url, title, Icon }: MenuProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={url}
      className={cn(
        pathname === url ? "admin-active_link cursor-default" : "",
        "flex transition-all duration-150 ease-in-out group hover:admin-active_link hover:text-white items-center gap-4 rounded-full md:rounded-md  md:p-4  md:justify-start   w-full"
      )}
    >
      <MenuLinkIconWrapper
        className={`${
          pathname === url ? "text-white" : "text-[#c0c0c0]"
        } group-hover:text-white`}
        icon={Icon}
      />

      <span
        className={cn(
          pathname === url ? "text-white" : "text-[#C0C0C0]",
          "hidden md:block  lg:text-xl mt-1 group-hover:text-white"
        )}
      >
        {title}
      </span>
    </Link>
  );
};

export default MenuLink;
