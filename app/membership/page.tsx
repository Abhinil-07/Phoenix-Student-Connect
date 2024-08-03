"use client";
import { MembershipForm } from "@/components/component/membership-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const Membership = () => {
  const router = useRouter();

  //   const studentID = "1234";
  //   const name = "Chandrima Paul";

  //   const memberEntryResponse = await axios.post(
  //     "http://localhost:5000/api/v1/member/join",
  //     {
  //       studentID: studentID,
  //       name: name,
  //     }
  //   );
  //   if (memberEntryResponse.status === 200) {
  //     console.log("Member entry successful");
  //     const response = await axios.post(
  //       "http://localhost:4000/api/payment/checkout",
  //       {
  //         amount: 200,
  //       }
  //     );
  //     console.log(response.data);
  //     const order = response.data.order;
  //     const options = {
  //       key: process.env.RAZORPAY_KEY_ID,
  //       amount: order.amount,
  //       currency: "INR",
  //       name: "Phoenix-The official tech club of NSEC",
  //       // description: "Tutorial of RazorPay",
  //       image:
  //         "https://phoenixnsec.in/static/media/logo1.a52d489a9dc1f01e80f6.png",
  //       order_id: order.id,
  //       //   callback_url: "http://localhost:4000/api/payment/paymentverification",

  //       handler: async function (response: any) {
  //         // alert(response.razorpay_payment_id);
  //         // alert(response.razorpay_order_id);
  //         // alert(response.razorpay_signature);
  //         const res = await axios.post(
  //           "http://localhost:4000/api/payment/paymentverification",
  //           {
  //             razorpay_payment_id: response.razorpay_payment_id,
  //             razorpay_order_id: response.razorpay_order_id,
  //             razorpay_signature: response.razorpay_signature,
  //             studentID: studentID, // Include studentID in the verification request
  //           },
  //           { withCredentials: true } // Configuration object
  //         );
  //         const orderID = response.razorpay_order_id;
  //         if (res.status === 200) {
  //           router.push(`/success/${orderID}`);
  //         }
  //       },
  //       theme: {
  //         color: "#121212",
  //       },
  //     };
  //     //TODO : redirect to a custom route with razorpay order id in it and display it
  //     const razor = new (window as any).Razorpay(options);
  //     razor.open();
  //   }
  // };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <MembershipForm />
    </div>
  );
};

export default Membership;
