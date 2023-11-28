import Image from "next/image";

import {
  Blogs,
  Hero,
  HowItWorks,
  OrderNow,
  SubsCribe,
  TopRestaurants,
} from "@/components/shared/home";

import MaxWidthWrapper from "@/utils/max-with-wrapper";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 relative">
          <Hero />
          <OrderNow />
          <HowItWorks />
          <div className=" w-[20%] h-[20%] -z-10 absolute top-[50%] inset-x-0 pink__gradient  " />
          <TopRestaurants />
          {/** TODO: Testimonial */}
          <div className="my-10 pt-12 flex justify-center items-center">
            <Image
              src="/image/photo-4.png"
              alt="photo"
              width={800}
              height={800}
              className="object-cover object-center"
            />
          </div>
          <Blogs />
          <SubsCribe />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
