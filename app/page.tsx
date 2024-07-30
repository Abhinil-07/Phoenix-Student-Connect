import { auth } from "@/auth";

import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  console.log(session);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        hello world
      </div>
    </>
  );
}
