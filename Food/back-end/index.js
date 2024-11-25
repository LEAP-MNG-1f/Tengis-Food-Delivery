import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./connectDB.js";
import bodyParser from "body-parser";
import { ObjectId } from "mongodb";

dotenv.config();

const server = express();
const PORT = 8000;

server.use(cors());
server.use(bodyParser.json());

server.get("/", async (req, response) => {
  const db = await connectDb();

  let collection = db.collection("movies");
  let results = await collection.find().limit(10).toArray();

  response.json({
    succes: true,
    data: results,
  });
});

server.post("/create-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("test");
  const result = await collection.insertMany([
    {
      name: "Naruto",
      email: "Naruto@gmail.com",
    },
    {
      name: "Sasuke",
      email: "Sasuke@gmail.com",
    },
    {
      name: "Sakura",
      email: "Sakura@gmail.com",
    },
  ]);

  response.json({
    succes: true,
    data: result,
  });
});

server.delete("/delete-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("test");
  const result = await collection.deleteOne({
    _id: new ObjectId("673ff14597d4d83c00f19d8a"),
  });

  response.json({
    succes: true,
    data: result,
  });
});

server.put("/update-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("test");
  const result = await collection.update(
    {
      _id: new ObjectId("673ff2ae2930e49fb1bd8d26"),
    },
    {
      $set: { email: "Saskue@gmail.com" },
    }
  );

  response.json({
    succes: true,
    data: result,
  });
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});