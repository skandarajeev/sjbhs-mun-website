import express from "express"



const app = express()
app.listen(4000, () => { console.log("Pratheek is extra dumb") })
app.get('/', (req, res) => { res.send("kar is sexy") })