/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/UnISPHmhgUj
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User } from "@/models/user.model";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/utils";

export function SignupForm() {
  const handleSignup = async (formData: any) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("from handleSignup", name, email, password);

    if (!name || !email || !password) {
      throw new Error("Please provide name, email and password");
    }
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exists");
    }
    // const hashedPassword = await hash(password, 12);
    await User.create({
      name,
      email,
      password,
    });
    redirect("/login");
  };
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-muted-foreground">
          Enter your information to create an account.
        </p>
      </div>
      <div className="space-y-4">
        <form action={handleSignup}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
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
            Sign Up
          </Button>
        </form>
        <div className="relative flex items-center">
          <div className="flex-1 border-t border-muted" />
          <div className="px-4 text-muted-foreground">Or</div>
          <div className="flex-1 border-t border-muted" />
        </div>
        <div className="space-y-2">
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <Link
            href="/login"
            className="inline-block w-full text-center text-sm underline"
            prefetch={false}
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}