import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const FoodTable = () => {
  return (
    <Table>
      <TableCaption>A list of top food.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Image</TableHead>
          <TableHead className="text-center">Name</TableHead>
          <TableHead className="text-center">Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="">
            <Image
              src="/image/food/burger.png"
              alt="profile"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </TableCell>
          <TableCell className="text-sm md:text-lg">John Doe</TableCell>
          <TableCell>
            <span className="w-[300px] line-clamp-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              quia possimus. Placeat vero laudantium commodi ipsam nesciunt
              eligendi eaque eum neque numquam magni, dignissimos rem illum esse
              ducimus laboriosam dolor.
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default FoodTable;
