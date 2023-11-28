import { WorkCard } from "@/components/card/home-card";
import { WorksData } from "@/lib/data/works-data";

const HowItWorks = () => {
  return (
    <div className="flex flex-col gap-8 py-20 relative">
      <div>
        <h1 className="text-5xl font-bold text-center font-Inter">
          How It Works
        </h1>
        <p className="text-sm text-muted-foreground my-4 text-center">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
          tellus in metus vulputate eu scelerisque felis.
        </p>
      </div>
      <div className="flex items-center flex-col md:flex-row gap-8 md:gap-16 md:-ml-10 lg:-ml-0  justify-between ">
        {WorksData.map((data) => (
          <WorkCard
            key={data.id}
            title={data.title}
            content={data.content}
            imageSrc={data.imgSrc}
            id={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
