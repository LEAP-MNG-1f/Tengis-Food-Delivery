import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import { Order } from "./model/order.js";

mongoose.connect(
  "mongodb+srv://tengisbatbold11:Tengis0808@tengis-food.psict.mongodb.net/food-delivery"
);
const server = express();
const PORT = 4000;

server.use(cors());
server.use("/api", Order);
server.use("/api", userRouter);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
