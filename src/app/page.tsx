import {
  Hero,
  HowItWorks,
  OrderNow,
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
          <div className=" w-[20%] h-[35%] -z-10  absolute top-[100%] inset-x-0 pink__gradient  " />
          <HowItWorks />
          <TopRestaurants />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
