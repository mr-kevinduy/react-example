import express from "express";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
// import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(8000, () => console.log("Running on localhost:8000"));
