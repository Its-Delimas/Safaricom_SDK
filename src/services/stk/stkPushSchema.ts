import {z} from "zod";

export const stkPushSchema = z.object({
  phone: z.string().min(1, "Phone number is required"),
  amount: z.number().positive("Amount must be greater than 0").int("Amount must be a whole number"),
  accountReference: z.string().min(1, "Account reference is required").max(12, "Account reference must be 12 characters or fewer"),
  transactionDesc: z.string().max(13, "Transaction description must be 13 characters or fewer").optional(),
});