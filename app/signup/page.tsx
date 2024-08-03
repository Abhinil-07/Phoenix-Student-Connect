import { auth } from "@/auth";
import { SignupForm } from "@/components/component/signup-form";
import { redirect } from "next/navigation";
import React from "react";

const SignUp = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <SignupForm />
    </div>
  );
};

export default SignUp;
