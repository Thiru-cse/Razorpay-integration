import React from "react";
import axios from "../api/paymentApi";

const PaymentForm = () => {
  const handlePayment = async () => {
    // Request order creation from the backend
    const { data: order } = await axios.post("/payment/createOrder", {
      amount: 500, // Replace with the actual amount
      currency: "INR",
    });

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Your App Name",
      description: "Test Transaction",
      order_id: order.id,
      handler: async function (response) {
        const paymentResult = {
          order_id: order.id,
          payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        };
        console.log(options);

        // Verify the payment on the backend
        const verify = await axios.post("/payment/verifyPayment", paymentResult);
        if (verify.data.message === "Payment verified successfully") {
          alert("Payment successful!");
        } else {
          alert("Payment verification failed!");
        }
      },
      prefill: {
        name: "Your Name",
        email: "your.email@example.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <h2>Complete Your Payment</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentForm;
