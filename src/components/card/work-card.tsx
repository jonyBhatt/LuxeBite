import Image from "next/image";

interface CardProps {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
}

const WorkCard = ({ id, title, content, imageSrc }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="relative h-56 w-56">
        <Image src={imageSrc} alt="work1" fill />
      </div>
      <div className="flex items-baseline gap-1">
        <h2 className="text-4xl text-muted-foreground font-bold font-Smooch">
          {id}
        </h2>
        <span className="font-bold font-Inter">{title}</span>
      </div>
      <span className="text-muted-foreground font-normal text-base font-Inter text-center">
        {content}
      </span>
    </div>
  );
};

export default WorkCard;
