import express from "express";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import bodyParser from "body-parser";
import cors from "cors";

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

app.post("/send", async function (req, res) {
  try {
    const docRef = await setDoc(
      doc(db, req.body.comittee, req.body.name),
      req.body
    );
    console.log(req.body);

    res.send("Success");
  } catch (e) {
    console.error(e);
  }
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
