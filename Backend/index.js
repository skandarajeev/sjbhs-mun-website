import express from "express";
import { initializeApp } from "firebase/app/dist/index.cjs.js";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore/dist/index.cjs.js";
import bodyParser from "body-parser";
import cors from "cors";
import crypto from "crypto";
import Razorpay from "razorpay";
import dotenv from "dotenv";

import shortid from "shortid";
const app = express();
import product from "./api/product.js";

app.use(express.json({ extended: false }));
app.use("/api/product", product);

const PORT = process.env.port || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

dotenv.config();
const firebaseConfig = {
  apiKey: "AIzaSyDbJnRowz12dNnhrGduNeqWDhNpjFFOBPk",
  authDomain: "sjbhsmun-2023.firebaseapp.com",
  projectId: "sjbhsmun-2023",
  storageBucket: "sjbhsmun-2023.appspot.com",
  messagingSenderId: "325178861580",
  appId: "1:325178861580:web:209c1d8d86f5ff7f2de629",
  measurementId: "G-MHDL61NQEH",
};

function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes("favicon.ico")) {
    res.status(204).end();
  }
  next();
}

const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);
const razorpay = new Razorpay({
  key_id: "rzp_live_ayY9VZc9GAfZ38",
  key_secret: "iPYGivxQ0Hx9weMtE3BNI52X",
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.header("Access-Control-Allow-Methods", "*"); // Allow any HTTP method
  res.header("Access-Control-Allow-Headers", "*"); // Allow any headers
  res.header("Access-Control-Allow-Credentials", "true"); // Include this if needed

  // if (req.method === "OPTIONS") {
  //   res.sendStatus(200);
  // } else {
  next();
});
//   }
// });
// // app.use(function (req, res, next) {
// //   res.header("Access-Control-Allow-Origin", "https://daga.vercel.app"); // update to match the domain you will make the request from
// //   res.header(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept"
// //   );
// //   next();
app.use(ignoreFavicon);

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
    const amount = parseInt(1299 * parseInt(req.body.total));
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

  let key_secret = "iPYGivxQ0Hx9weMtE3BNI52X";

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
        { id: id, total: parseInt(regInfo.total) + 1 },
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

  let key_secret = "iPYGivxQ0Hx9weMtE3BNI52X";

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
