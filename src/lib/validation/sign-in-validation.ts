import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "You must put a valid email" }),
  password: z.string().min(4, {
    message: "Your password must be 4 characters long",
  }),
});
