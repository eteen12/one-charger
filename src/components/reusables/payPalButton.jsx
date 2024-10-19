"use client";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ itemTotal }) => {
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
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order.capture();
          window.location.href = "/thank-you";
          alert(`Transaction completed by ${details.payer.name.given}!`);
        }}
        onError={(err) => {
          console.error("Error during the transaction", err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
