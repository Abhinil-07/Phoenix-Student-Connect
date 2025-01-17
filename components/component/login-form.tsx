/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/WeVdOYWRq2c
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Rubik } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginClient from "../client/form";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function LoginForm() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-muted-foreground">
          Enter your credentials to access your account.
        </p>
      </div>
      <LoginClient />

      <div className="space-y-2">
        <div className="text-center text-sm text-muted-foreground">or</div>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button variant="outline" className="w-full">
            <ChromeIcon className="mr-2 h-4 w-4" />
            Login with Google
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Dont have an account?{" "}
          <Link href="/signup" className="underline" prefetch={false}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
