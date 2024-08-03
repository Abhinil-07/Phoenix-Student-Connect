import CertificateDownload from "@/components/client/certificate";
import { SuccessPage } from "@/components/component/success";
import { primaryBackendURL } from "@/lib/backendURLS";
import axios from "axios";
import React from "react";

const Success = async ({ params }: { params: { orderID: string } }) => {
  async function getStudentDetaisls(params: { orderID: string }) {
    const response = await axios.post(`${primaryBackendURL}/member/details`, {
      razorpay_order_id: params.orderID,
    });
    return response.data.member;
  }
  const studentDetails = await getStudentDetaisls(params);
  console.log(studentDetails);
  return (
    <SuccessPage
      studentID={studentDetails.studentID}
      studentName={studentDetails.name}
    />
  );
};

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

export default Success;
