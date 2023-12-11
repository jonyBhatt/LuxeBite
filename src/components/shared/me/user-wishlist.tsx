import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CartData } from "@/lib/data/cart-data";
import Image from "next/image";
const Wishlist = () => {
  return (
    <div className="my-10">
      <h2 className="font-bold text-3xl tracking-wide">Wish List</h2>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CartData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Image
                  src={item.image}
                  alt="burger"
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </TableCell>
              <TableCell>{ item.title}</TableCell>
              <TableCell>
                <span className="line-clamp-1 ">
                  {item.longDescr}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Wishlist;
