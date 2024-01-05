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
const AddFood = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof foodSchema>>({
    resolver: zodResolver(foodSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: z.infer<typeof foodSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    try {
      const res = await axios.post("/api/food", values);
      console.log(res.data);
      toast.success("Food added");
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
      <DialogTitle>Add food</DialogTitle>
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
                      <Input placeholder="food name" {...field} />
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
                      <Textarea placeholder="Food description" {...field} />
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
                        value={field.value}
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
                      <Input placeholder="Food price" {...field} />
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
                          <SelectValue placeholder="Select Category" />
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

export default AddFood;
