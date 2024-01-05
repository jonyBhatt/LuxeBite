"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BadgePlus, PenBox, Trash } from "lucide-react";
import Image from "next/image";
import AddFood from "./_components/add-food";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProductType } from "@/types";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import UpdateFood from "./_components/update-food";

const Food = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/food").then((res) => res.json()),
  });

  // console.log(data);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  //Delete product handler
  async function handleDeleteProduct(id: string) {
    try {
      const res = await axios.delete(`/api/food/${id}`);
      console.log(res.data);
      toast.success(res.data);
      queryClient.invalidateQueries({ queryKey: ["products"] });
      // router.replace("/admin-dashboard/food");
      router.push("/admin-dashboard/food");
      router.refresh();
    } catch (error: any) {
      console.log(error.message);
      toast.error("Error deleting the food item");
    }
  }

  return (
    <div className="py-10 px-4">
      <div className="flex justify-between items-center pb-1.5 border-b border-b-secondary">
        <h2 className="text-4xl font-bold ">Food</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="flex items-center gap-2.5">
              <BadgePlus />
              <span className="text-lg">Add Food</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AddFood />
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Image</TableHead>
              <TableHead className="">Price</TableHead>
              <TableHead className="">Category</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item: ProductType) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                  {item.img ? (
                    <>
                      <Image
                        src={item.img}
                        alt="burger image"
                        width={36}
                        height={36}
                        className="object-cover rounded-full"
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        src="/image/food/burger.png"
                        alt="burger image"
                        width={36}
                        height={36}
                        className="object-cover rounded-full"
                      />
                    </>
                  )}
                </TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.catSlug}</TableCell>
                <TableCell className="flex items-center gap-2.5">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant={"secondary"} className="">
                        <PenBox />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <UpdateFood params={{ id: item.id }} />
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteProduct(item.id)}
                  >
                    <Trash />
                    {/* Delete */}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Food;

{
  /**
  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/food").then((res) => res.json()),
  });
*/
}
