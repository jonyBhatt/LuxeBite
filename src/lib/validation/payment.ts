import { z } from "zod";

export const paymentSchema = z.object({
  name: z.string().min(4, { message: "Name field required" }),
  cardNumber: z.string().optional(),
  expiresOnMonth: z.string().optional(),
  expiresOnYear: z.string().optional(),
  cvc: z.string().optional(),
  address: z.string().min(1, { message: "Address required" }),
  number: z.string().min(11, { message: "Phone number required" }),
});
