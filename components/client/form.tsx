"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { credentialLogin } from "@/actions/loginHandler";
import { useRouter } from "next/navigation";

const LoginClient = () => {
  const router = useRouter();
  return (
    <div>
      <form
        action={async (formData) => {
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;
          console.log(email, password);
          if (!email || !password) {
            return toast.error("Please provide email and password");
          }
          const toastId = toast.loading("Logging in...");
          const error = await credentialLogin(email, password);

          if (!error) {
            toast.success("Login successful", { id: toastId });
            router.push("/");
          } else {
            toast.error(String(error), { id: toastId });
          }
        }}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginClient;
