import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between flex-col gap-8 md:flex-row items-center">
      <div className="flex flex-col gap-6">
        <h1 className=" font-Smooch text-5xl leading-relaxed text-center md:text-start font-bold ">
          The Best Restaurants <br /> In Your Home
        </h1>
        <p className="text-sm text-center md:text-start font-Inter text-muted-foreground">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat  morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus.
        </p>
      </div>
      <div className="h-full relative">
        <div className=" ">
          <Image
            src="/image/Hero.png"
            alt="hero"
            width={500}
            height={500}
            className="object-cover object-center z-10"
          />
        </div>
        <div className=" w-[40%] h-[35%] -z-10   absolute top-0 pink__gradient  " />
        <div className=" w-[40%] h-[35%] -z-10  absolute top-[100%] right-0 white__gradient  " />
      </div>
    </div>
  );
};

export default Hero;
