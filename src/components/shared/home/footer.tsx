import { Separator } from "@/components/ui/separator";
import { ArrowRight, MapPin, MailOpen, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-300 dark:bg-[#060f275a] ">
      <div className="w-full flex flex-col  container lg:flex-row lg:justify-between items-start lg:items-center gap-8 lg:gap-0">
        <div className="flex flex-col gap-6 items-start lg:w-[500px]">
          <div className="relative w-16 h-16">
            <Image src="/svg/logo.svg" alt="logo" fill className="" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-5xl font-bold font-Inter">
              The Best Restaurants in Your Home
            </h2>
            <span className="text-normal ml-2 lg:ml-0 text-muted-foreground font-Inter">
              Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
              lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
              pretium quam.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start">
          <h3 className="text-muted-foreground font-bold text-4xl">Menu</h3>
          <div className="flex  flex-col gap-4">
            <Link
              href="#"
              className="flex items-center justify-start gap-1 transition-all duration-150 ease-in-out hover:text-primary"
            >
              <span className="text-2xl">Home</span>
              <ArrowRight className="w-6 " />
            </Link>

            <Link
              href="#"
              className="flex items-center justify-start gap-1 transition-all duration-150 ease-in-out hover:text-primary"
            >
              <span className="text-2xl">Restaurant</span>
              <ArrowRight className="w-6 " />
            </Link>

            <Link
              href="#"
              className="flex items-center justify-start gap-1 transition-all duration-150 ease-in-out hover:text-primary"
            >
              <span className="text-2xl">About</span>
              <ArrowRight className="w-6 " />
            </Link>

            <Link
              href="#"
              className="flex items-center justify-start gap-1 transition-all duration-150 ease-in-out hover:text-primary"
            >
              <span className="text-2xl">Contact</span>
              <ArrowRight className="w-6 " />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start">
          <h3 className="text-muted-foreground font-bold lg:-mt-[25px] sm:-mt-0 text-4xl">Contacts</h3>

          <div className="flex  flex-col gap-4">
            <div className="flex items-center justify-start gap-2">
              <MapPin className="w-6 h-6" />
              <span className="text-sm text-muted-foreground font-Inter">
                1717 Harrison St, San Francisco, CA 94103, United States
              </span>
            </div>
          </div>
          <Separator className=" text-gray-800 w-full" />

          <div className="flex  flex-col gap-4">
            <div className="flex items-center justify-start gap-2">
              <MailOpen className="w-6 h-6 " />
              <span className="text-sm text-muted-foreground font-Inter">
                johnDoe@gmail.com
              </span>
            </div>
          </div>

          <div className="flex  flex-col gap-4">
            <div className="flex items-center justify-start gap-2">
              <Phone className="w-6 h-6" />
              <span className="text-sm text-muted-foreground font-Inter">
                +1 425 326 16 27
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /**
   *   <div className="relative w-16 h-16">
          <Image src="/svg/logo.svg" alt="logo" fill className="" />
        </div>
        <div className="flex  flex-col gap-4">
          <h2 className="text-5xl font-bold font-Inter">
            The Best Restaurants in Your Home
          </h2>
          <span className="text-normal ml-2 lg:ml-0 text-muted-foreground font-Inter">
            Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
            lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
            pretium quam.
          </span>
        </div>
   * 
   */
}
