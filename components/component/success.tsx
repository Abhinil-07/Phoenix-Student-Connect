import { Button } from "@/components/ui/button";
import CertificateDownload from "../client/certificate";
import Link from "next/link";

export function SuccessPage({
  studentID,
  studentName,
}: {
  studentID: string;
  studentName: string;
}) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <CircleCheckIcon className="mx-auto h-12 w-12 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Your payment has been confirmed
        </h1>
        <div className="mt-6 space-y-4">
          <div className="grid gap-2">
            <p className="text-muted-foreground">Student ID: {studentID}</p>
            <p className="text-muted-foreground">Student Name: {studentName}</p>
            <p className="text-muted-foreground">
              Please keep a look on your email ID
            </p>
            <p className="text-center text-sm text-gray-500 mt-4">
              Get your certificates here :{" "}
              <Link href="/certificate">Certificate</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CircleCheckIcon(props: any) {
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
      <path d="m9 12 2 2 4-4" />
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
