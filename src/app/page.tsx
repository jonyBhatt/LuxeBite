import Hero from "@/components/shared/hero";
import OrderNow from "@/components/shared/order-now";
import MaxWidthWrapper from "@/utils/max-with-wrapper";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20">
          <Hero />
          <OrderNow />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
