"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { foodSchema } from "@/lib/validation/add-food";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import UploadFile from "@/utils/upload-button";
import axios from "axios";
import { ProductType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getData = (id: string) => {
  return fetch(`/api/food/${id}`, {
    cache: "no-store",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed!");
      }

      return res.json();
    })
    .catch((error) => {
      console.error(error);
      // Handle the error as needed
    });
};

const UpdateFood = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { isPending, error, data } = useQuery<ProductType>({
    queryKey: ["getProducts"],
    queryFn: () => getData(id),
  });

  const router = useRouter();

  const form = useForm<z.infer<typeof foodSchema>>({
    resolver: zodResolver(foodSchema),
    defaultValues: {
      title: data?.title ?? "",
      desc: data?.desc ?? "",
      catSlug: data?.catSlug ?? "",
      img: data?.img ?? "",
      price: data?.price?.toString() ?? "",
    },
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  async function onSubmit(values: z.infer<typeof foodSchema>) {
    console.log(values);
    try {
      const res = await axios.put(`/api/food/${id}`, values);
      console.log(res.data);
      toast.success("Food update");
      form.reset();
      router.push("/admin-dashboard/food");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Can not add food");
    }
  }
  return (
    <DialogHeader>
      <DialogTitle>Update food</DialogTitle>
      <div className="mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder={data.desc} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="img"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Food Image</FormLabel>
                    <FormControl>
                      <UploadFile
                        endpoint="imageUploader"
                        onChange={field.onChange}
                        value={field.value!}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Price</FormLabel>
                    <FormControl>
                      <Input placeholder={data.price.toString()} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="catSlug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={data.catSlug} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="breakfast">Breakfast</SelectItem>
                        <SelectItem value="meals">Meals</SelectItem>
                        <SelectItem value="beverages">Beverages</SelectItem>
                        <SelectItem value="meat">Meat</SelectItem>{" "}
                        <SelectItem value="bbq">Bbq</SelectItem>{" "}
                        <SelectItem value="drinks">Drinks</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit">Add</Button>
          </form>
        </Form>
      </div>
    </DialogHeader>
  );
};

export default UpdateFood;
