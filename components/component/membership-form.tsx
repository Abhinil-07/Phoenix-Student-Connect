// Ensure you have correct import paths and required imports
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { membershipDetaislSchema, TMembershipDetails } from "@/lib/types";
import axios from "axios";
import { useRouter } from "next/navigation"; // Make sure you import from "next/router"
import { InitiateRazorpayPayment } from "@/actions/razorpayHandler";
import { primaryBackendURL } from "@/lib/backendURLS";

export function MembershipForm() {
  const router = useRouter();
  let orderID: string | void = undefined;
  const form = useForm<TMembershipDetails>({
    resolver: zodResolver(membershipDetaislSchema),
    defaultValues: {
      name: "",
      studentID: "",
    },
  });

  async function onSubmit(data: TMembershipDetails) {
    try {
      const response = await axios.post(`${primaryBackendURL}/member/join`, {
        studentID: data.studentID,
        name: data.name,
      });

      if (response.status === 200) {
        const orderID = await InitiateRazorpayPayment(data.studentID);
        if (orderID) {
          // Wait for the Razorpay payment to complete before redirecting
          router.push(`/success/${orderID}`);
        }
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Eg:John Doe" {...field} />
              </FormControl>
              <FormDescription>Enter your full name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="studentID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>StudentID</FormLabel>
              <FormControl>
                <Input placeholder="eg:2000120" {...field} />
              </FormControl>
              <FormDescription>Enter your college StudentID</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
