import { auth } from "@/auth";
import { LandingPage } from "@/components/component/landing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Landing = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="h-screen bg-black">
      <LandingPage />
      {/* <Link href="/login">
        <Button>Login</Button>
      </Link> */}
    </div>
  );
};

export default Landing;
