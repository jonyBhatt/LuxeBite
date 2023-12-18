import { Star } from "lucide-react";
import Image from "next/image";

const Food = ({ params }: { params: string }) => {
  console.log(params);

  return (
    <div className="container my-16 w-full font-Inter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <div className="col-span-1  rounded-sm shadow-md ">
          <Image
            src="/image/food/burger.png"
            alt="burger"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold">Name :</h3>
            <span className="font-medium">Burger</span>
          </div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold">Description:</h3>
            <span className="text-muted-foreground text-sm">
              marinated oats quesadilla is a little greasy with a tough texture.
              It has subtle hints of wheat with myrtle plant and has a dash of
              calamint.
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold">Category :</h3>
            <span className="text-muted-foreground text-sm">breakfast</span>
          </div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold">Price :</h3>
            <span className="text-muted-foreground ">$ 170</span>
          </div>
        </div>
      </div>
      <div className="my-8 bg-secondary rounded-md shadow-md p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/image/h5.jpg"
                alt="person"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">John Doe</h5>
              <span className="text-muted-foreground">johndoe@gmail.com</span>
            </div>
          </div>
          <span className="text-muted-foreground text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            consectetur, eveniet doloribus molestiae ab veritatis sed tempore
            laboriosam cupiditate delectus saepe optio repudiandae ipsum
            adipisci maiores, facere beatae tempora nobis?
          </span>
          <div className="flex items-center gap-1">
            <span>5</span>
            <Star fill="yellow" color="yellow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
