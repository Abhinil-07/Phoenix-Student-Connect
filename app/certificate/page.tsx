import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import axios from "axios";
import { primaryBackendURL } from "@/lib/backendURLS";
import CertificateDownload from "@/components/client/certificate";
const Certificate = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  async function getStudentDetails() {
    const response = await axios.post(
      `${primaryBackendURL}/member/details/email`,
      {
        email: session?.user?.email,
      }
    );
    return response.data.member;
  }
  const studentDetails = await getStudentDetails();
  console.log(studentDetails);
  return (
    <div className="flex items-center justify-center h-screen">
      <CertificateDownload userName={studentDetails.name} />
    </div>
  );
};

export default Certificate;
