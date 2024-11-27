import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import orderRouter from "./router/orderRouter.js";
import foodRouter from "./router/foodRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import userRouter from "./router/userRouter.js";

mongoose
  .connect(
    "mongodb+srv://tengisbatbold11:Tengis0808@tengis-food.psict.mongodb.net/food-delivery"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const server = express();
const PORT = 4000;

e;
server.use(cors());
server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/orders", orderRouter);
server.use("/api/foods", foodRouter);
server.use("/api/categories", categoryRouter);


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
