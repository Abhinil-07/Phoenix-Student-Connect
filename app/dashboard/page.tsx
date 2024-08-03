import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  console.log(session);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        hello world
        <Link href={"/membership"}>
          <Button>Join now</Button>
        </Link>
      </div>
    </>
  );
}
