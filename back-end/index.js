import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./ConnectDB.js";

dotenv.config();

const server = express();
const PORT = 8000;

server.use(cors());

server.get("/", async (req, response) => {
  try {
    const db = await connectDB();
    const collection = db.collection("users");
    const results = await collection.findOne({ name: "Ned Stark" });
    response.json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error("Error in GET /:", error);
    response.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj bna`);
});
