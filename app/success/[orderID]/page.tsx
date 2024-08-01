import React from "react";

const Success = async ({ params }: { params: { orderID: string } }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      Payment for order id {params.orderID} successful
    </div>
  );
};

export default Success;
