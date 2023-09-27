import express from "express";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import bodyParser from "body-parser";
import cors from "cors";
import crypto from "crypto";
import Razorpay from "razorpay";
import dotenv from "dotenv";

import shortid from "shortid";

dotenv.config();
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "sjbhsmun-2023.firebaseapp.com",
  projectId: "sjbhsmun-2023",
  storageBucket: "sjbhsmun-2023.appspot.com",
  messagingSenderId: "325178861580",
  appId: "1:325178861580:web:209c1d8d86f5ff7f2de629",
  measurementId: "G-MHDL61NQEH",
};

const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
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

    console.log("Information Recieved");

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    console.log(req.body);
    const amount = parseInt(1 * parseInt(req.body.total));
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
      console.log("Order Sent");
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
  //  ;
});
app.post("/individual", async function (req, res) {
  const { order_id, payment_id, razorpay_signature } = req.body;

  let key_secret = process.env.RAZORPAY_SECRET;

  // STEP 8: Verification & Send Response to User

  // Creating hmac object
  let hmac = crypto.createHmac("sha256", key_secret);

  // Passing the data to be hashed
  hmac.update(order_id + "|" + payment_id);

  // Creating the hmac in the required format
  const generated_signature = hmac.digest("hex");

  if (razorpay_signature === generated_signature) {
    try {
      const regPage = doc(db, "mun-details", "registrations");
      const regInfo = (await getDoc(regPage)).data();
      const id = parseInt(regInfo.id) + 10;
      console.log(id);
      await setDoc(doc(db, req.body.committee, id.toString()), req.body);
      await setDoc(
        regPage,
        { id: id, total: regInfo.total + 10 },
        { merge: true }
      );

      res.send({ result: "success", ids: [[req.body.name, id]] });
      console.log("Res is sent ");
    } catch (e) {
      res.send("error");
      console.log(e);
    }
  } else res.json({ success: false, message: "Payment verification failed" });
});

app.post("/delegation", async function (req, res) {
  const { order_id, payment_id, razorpay_signature } = req.body;

  let key_secret = process.env.RAZORPAY_SECRET;

  // STEP 8: Verification & Send Response to User

  // Creating hmac object
  let hmac = crypto.createHmac("sha256", key_secret);

  // Passing the data to be hashed
  hmac.update(order_id + "|" + payment_id);

  // Creating the hmac in the required format
  const generated_signature = hmac.digest("hex");

  if (razorpay_signature === generated_signature) {
    try {
      let ids = [];
      const delegation = req.body;
      const regPage = doc(db, "mun-details", "registrations");
      let regInfo = (await getDoc(regPage)).data();
      const delId = parseInt(regInfo.delegation) + 10;
      await setDoc(doc(db, delegation.name, "information"), {
        name: delegation.name,
        id: delId,
        type: delegation.type,
      });
      await setDoc(
        regPage,
        {
          delegation: delId,
          totalDel: parseInt(regInfo.totalDel) + 1,
        },
        { merge: true }
      );
      let id = regInfo.id;
      delegation.delegation.forEach(async (person) => {
        id = id + 10;

        ids.push([person.name, id]);
        await setDoc(doc(db, delegation.name, id.toString()), person);
        await setDoc(regPage, { id: id }, { merge: true });
      });

      await setDoc(
        regPage,
        { total: parseInt(regInfo.total) + parseInt(delegation.total) },
        { merge: true }
      );
      console.log(ids);
      res.send({ ids: ids, result: "success" });
    } catch (e) {
      console.error(e);
    }
  }
});
