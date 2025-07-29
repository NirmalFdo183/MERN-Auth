import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";

const app = express();
const port = process.env.PORT || 5002;


app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

connectDB();

app.get("/", (req, res) => res.json({ status: "ok", message: "API Working fine" }));

app.listen(port, async () => {
  console.log(`Server started on PORT ${port}`);
});
