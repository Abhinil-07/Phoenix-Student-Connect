import { razorpayURL } from "@/lib/backendURLS";
import axios from "axios";
import { redirect } from "next/navigation";

export const InitiateRazorpayPayment = async (
  studentID: string
): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    try {
      console.log("Member entry successful");
      axios
        .post(`${razorpayURL}/checkout`, { amount: 200, studentID })
        .then((response) => {
          console.log(response.data);
          const order = response.data.order;
          const options = {
            key: process.env.RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: "INR",
            name: "Phoenix-The official tech club of NSEC",
            image:
              "https://phoenixnsec.in/static/media/logo1.a52d489a9dc1f01e80f6.png",
            order_id: order.id,
            handler:
              // async function (response: any) {
              //   try {
              //     const res = await axios.post(
              //       `${razorpayURL}/paymentverification`,
              //       {
              //         razorpay_payment_id: response.razorpay_payment_id,
              //         razorpay_order_id: response.razorpay_order_id,
              //         razorpay_signature: response.razorpay_signature,
              //         studentID: studentID,
              //       },
              //       { withCredentials: true }
              //     );
              //     if (res.status === 200) {
              //       resolve(response.razorpay_order_id); // Resolve with the orderID
              //     } else {
              //       reject(new Error("Payment verification failed"));
              //     }
              //   } catch (error) {
              //     reject(error);
              //   }
              // },
              function (response: any) {
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
                console.log("payment id is " + response.razorpay_payment_id);
                console.log("order id is " + response.razorpay_order_id);
                resolve(response.razorpay_order_id);
              },
            theme: {
              color: "#121212",
            },
          };

          const razor = new (window as any).Razorpay(options);
          razor.open();
        })
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};
