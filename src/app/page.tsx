import Image from "next/image";

import {
  Blogs,
  Footer,
  Hero,
  HowItWorks,
  Menu,
  OrderNow,
  SubsCribe,
  TopRestaurants,
} from "@/components/shared/home";

import MaxWidthWrapper from "@/utils/max-with-wrapper";
import { Navbar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Navbar />

      <MaxWidthWrapper>
        <div className="py-20 relative">
          <Hero />
          <OrderNow />
          <HowItWorks />
          <div className=" w-[20%] h-[20%] -z-10 absolute top-[50%] inset-x-0 pink__gradient  " />
          <TopRestaurants />
          {/** TODO: Testimonial */}
          <Menu />
          <Blogs />
          <SubsCribe />
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
