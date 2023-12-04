import { z } from "zod";



export const signUpSchema = z.object({
    name: z.string().min(2, { message: "Name cannot be empty" }),
    email: z
      .string()
      .email({ message: "It's not a email. Give a perfect email" }),
    password: z.string().min(4, {
      message: "password must be at least 4 characters.",
    }),
    confirm: z.string().min(4, {
      message: "confirm password must be at least 4 characters.",
    }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });
