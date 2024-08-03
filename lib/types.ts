import { z } from "zod";

export const membershipDetaislSchema = z.object({
  name: z.string().min(2, { message: "Name cannot be empty" }),
  studentID: z.string().min(2, { message: "Student ID cannot be empty" }),
});

export type TMembershipDetails = z.infer<typeof membershipDetaislSchema>;
