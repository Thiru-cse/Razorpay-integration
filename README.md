# Razorpay Payment Integration with MERN Stack

This project demonstrates how to integrate Razorpay's payment gateway with a MERN (MongoDB, Express, React, Node.js) stack application. It covers both the backend setup for generating orders and handling payments and the frontend implementation for a seamless user experience.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Environment Variables](#environment-variables)
6. [Usage](#usage)
7. [Folder Structure](#folder-structure)
8. [API Endpoints](#api-endpoints)
9. [Frontend Implementation](#frontend-implementation)
10. [Screenshots](#screenshots)

---

## Project Overview

This project enables users to make payments using Razorpay on a MERN-based web application. It showcases how to create Razorpay orders from the backend, send the order details to the frontend, and complete the payment process using Razorpay's JavaScript SDK.

---

## Features

- **Razorpay Payment Integration**: Secure payments through Razorpay's gateway.
- **Order Generation**: Backend generates and manages order details.
- **Seamless Frontend Payment**: Smooth checkout flow for users.
- **Environment Configuration**: Secure handling of sensitive data through environment variables.

---

## Tech Stack

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (optional, if storing order data)
- **Payment Gateway**: Razorpay

---

## Installation

### Prerequisites

Ensure you have the following installed on your system:
- Node.js
- MongoDB (optional)
- Razorpay Account

### Step-by-Step Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Thiru-cse/Razorpay-integration.git
   cd razorpay-mern-integration
   
2. Install dependencies for both the backend and frontend:
   ```bash
   #Install backend dependencies
   cd backend
   npm install
   #Install frontend dependencies
   cd ../frontend
   npm install

3. Create a .env file in the backend folder and add your Razorpay credentials:
```
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```
4. Run the backend server:
```
cd backend
npm start
```
5. Run the frontend React app:
```
cd ../frontend
npm start
```

## Environment Variables
Make sure you create a .env file in the backend/ folder with the following details:
```
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```
Note: Do not share your secret key publicly.

## Usage
Running the Application
Once both the backend and frontend are running, you can open the app in your browser at
`http://localhost:3000`

**Payment Process**
- Users can click on the "Pay Now" button, which will trigger the Razorpay checkout.
- Upon successful payment, details will be logged in the browser’s console and backend logs.

## Folder Structure

```
razorpay-mern-integration/
├── backend/
│   ├── config/
│   │   └── razorpay.js   # Razorpay instance configuration
│   ├── controllers/
│   │   └── paymentController.js   # Handles order creation and payment verification
│   ├── routes/
│   │   └── paymentRoutes.js   # Payment-related API routes
│   ├── server.js   # Entry point for backend
│   └── .env   # Environment variables (Razorpay Key ID & Secret)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── PaymentForm.jsx   # React component to handle Razorpay checkout
│   │   └── App.js   # Main application component
│   ├── public/
│   │   └── index.html   # Razorpay script is added here
│   └── package.json   # Frontend dependencies
├── README.md   # Project documentation
└── .gitignore   # Ignoring unnecessary files
```

## API Endpoints
**POST** ```/api/payment/createOrder```
- Description: Creates a Razorpay order and returns the order ID.
- Request Body:
```
{
  "amount": 500,
  "currency": "INR"
}
```

- Response
```
{
  "id": "order_id",
  "amount": 500,
  "currency": "INR"
}
```

## Frontend Implementation
The payment form in the frontend handles the integration with Razorpay.

- **PaymentForm.jsx**: React component to open the Razorpay checkout modal and handle payment success.
```
const handlePayment = async () => {
  const { data: order } = await axios.post("/api/payment/createOrder", { amount: 500 });
  const options = {
    key: env_variable.razorpay_keyID,
    order_id: order.id,
    amount: order.amount,
    currency: order.currency,
    handler: function (response) {
      console.log("Payment Successful", response);
    }
  };
  const razorpay = new window.Razorpay(options);
  razorpay.open();
};
```
## Screenshots
![Design](https://github.com/Thiru-cse/Fullstack-Developer/blob/main/My-Project-Screenshots/image.png)
![Design](https://github.com/Thiru-cse/Fullstack-Developer/blob/main/My-Project-Screenshots/payment%20page.png)
![Design](https://github.com/Thiru-cse/Fullstack-Developer/blob/main/My-Project-Screenshots/Payment%20success.png)

<h2 align="center"> Happy Learning! </h2>
