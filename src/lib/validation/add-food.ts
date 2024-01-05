import { z } from "zod";

export const foodSchema = z.object({
  title: z.string().min(2, { message: "Name Required" }),
  desc: z.string().min(10, { message: "Description required" }),
  img: z.string().optional(),
  price: z.string().min(1, { message: "Price is required" }),
  catSlug: z.string(),
});
