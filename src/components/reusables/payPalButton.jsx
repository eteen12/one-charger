"use client";
import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ itemTotal }) => {
  const [loading, setLoading] = useState(false);
  const total = parseFloat(itemTotal);

  if (isNaN(total) || total <= 0) {
    return <div>Please add one or more items to your cart to checkout</div>;
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_CLIENT_ID,
        currency: "CAD",
      }}
    >
      <PayPalButtons
        className="relative z-20"
        createOrder={(data, actions) => {
          setLoading(true);
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "CAD",
                  value: total,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          try {
            const details = await actions.order.capture();

            window.location.href = "/thank-you";
            const payerName = details.purchase_units[0].shipping.name.full_name;
            alert(`Transaction completed by ${payerName}!`);
          } catch (error) {
            console.error("Error capturing the order", error);
            alert(
              "There was an error completing your transaction. Please try again."
            );
          }
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
