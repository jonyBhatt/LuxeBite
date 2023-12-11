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

const UserTable = () => {
  return (
    <Table>
      <TableCaption>A list of user.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Image</TableHead>
          <TableHead className="text-center">Name</TableHead>
          <TableHead className="text-center">Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="">
            <Image
              src="/image/h5.jpg"
              alt="profile"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>johndoe@gmail.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default UserTable;
