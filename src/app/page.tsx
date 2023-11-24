import Hero from "@/components/shared/hero";
import HowItWorks from "@/components/shared/how-it-works";
import OrderNow from "@/components/shared/order-now";
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            officiis quis nesciunt voluptatibus repellendus totam quibusdam
            saepe vel tenetur quisquam exercitationem a earum aperiam illo ipsum
            est, dolorum illum veritatis.
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
