import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter, orderRouter } from "./router/userRouter.js";

mongoose.connect(
  "mongodb+srv://tengisbatbold11:Tengis0808@tengis-food.psict.mongodb.net/"
);
const server = express();
const PORT = 4000;

server.use(cors());
server.use("/api", orderRouter);
server.use("/api", userRouter);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
