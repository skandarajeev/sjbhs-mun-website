import express from "express";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import bodyParser from "body-parser";
import cors from "cors";
import crypto from "crypto"
import Razorpay from "razorpay";

import shortid from "shortid";






const firebaseConfig = {
  apiKey: "AIzaSyAEwuAAdhtckVj7RmYXOkDNF3QL_EUdWp8",
  authDomain: "mun-api-b2525.firebaseapp.com",
  projectId: "mun-api-b2525",
  storageBucket: "mun-api-b2525.appspot.com",
  messagingSenderId: "259985561049",
  appId: "1:259985561049:web:3efc827235706a157e75c8",
  measurementId: "G-TPFH0YFCS3",
};

const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);
const razorpay = new Razorpay({
  key_id: " process.env.RAZORPAY_KEY",
  key_secret: "iPYGivxQ0Hx9weMtE3BNI52X",

});
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.listen(4000);

app.get("/", (req, res) => {
  res.status(500).send("hi");
});

app.post("/indipay", async function (req, res) {
  if (req.method === "POST") {
    // Initialize razorpay object

    console.log("Information Recieved")

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = 1;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
      console.log("Order Sent")
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
  //   try {
  //     const docRef = await setDoc(
  //       doc(db, req.body.comittee, req.body.name),
  //       req.body
  //     );
  //     console.log(req.body);

  //     res.send("Success");
  //   } catch (e) {
  //     console.error(e);
  //   }
  // });
});
app.post("/individual", async function (req, res) {
  const { order_id, payment_id, razorpay_signature } = req.body;

  let key_secret = "iPYGivxQ0Hx9weMtE3BNI52X"

  // STEP 8: Verification & Send Response to User

  // Creating hmac object 
  let hmac = crypto.createHmac('sha256', key_secret);

  // Passing the data to be hashed
  hmac.update(order_id + "|" + payment_id);

  // Creating the hmac in the required format
  const generated_signature = hmac.digest('hex');


  if (razorpay_signature === generated_signature) {
    res.json({ success: true, message: "Payment has been verified" })
    console.log("REAL REAL")
  }
  else
    res.json({ success: false, message: "Payment verification failed" })
});

app.post("/delegation", async function (req, res) {
  try {
    const data = Object.entries(req.body);

    data.forEach(async (comittee) => {
      const docRef = await setDoc(
        doc(db, comittee[0], comittee[1].name),
        comittee[1]
      );
    });

    res.send("Success");
  } catch (e) {
    console.error(e);
  }
});
