import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import connectDB from "./ConnectDB.js";

dotenv.config();

const server = express();
const PORT = 8000;

server.use(cors());
server.post("/image-upload", async (request, response) => {
  try {
    cloudinary.config({
      cloud_name: "dwm2mie3c",
      api_key: "257275265174362",
      api_secret: "V_k2DSUgZStwgIunis7GTWNraJA",
    });

    const uploadResult = await cloudinary.uploader.upload("./asset/budaa.png");
    response.json(uploadResult);
  } catch (error) {
    console.log("cloudinary error", error);
  }
});

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
