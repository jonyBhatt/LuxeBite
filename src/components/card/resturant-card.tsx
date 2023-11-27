import Image from "next/image";
import { Button } from "../ui/button";

type TTags = {
  id: string;
  name: string;
};

type TRestaurantsCardProp = {
  imageUrl: string;
  title: string;
  content: string;
  tags: TTags[];
};
const RestaurantCard = ({
  title,
  content,
  tags,
  imageUrl,
}: TRestaurantsCardProp) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <Image
        src={imageUrl}
        alt="res1"
        width={50}
        height={50}
        className="object-cover rounded-full"
      />
      <h3 className="font-Inter font-semibold text-md">{title}</h3>
      <div className="flex items-center gap-1.5">
        {tags.map((tag) => (
          <Button
            key={tag.id}
            className="bg-transparent border border-accent text-center font-Smooch rounded-xl text-black dark:text-inherit hover:bg-primary hover:border-primary transition-all ease-in-out"
          >
            {tag.name}
          </Button>
        ))}
      </div>
      <span className="text-md font-Inter text-muted-foreground">
        {content}
      </span>
    </div>
  );
};

export default RestaurantCard;
