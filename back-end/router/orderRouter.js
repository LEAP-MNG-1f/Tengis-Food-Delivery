import express from "express";
import { createOrder, getAllOrders } from "../controllers/orderControl.js";

const userRouter = express.Router();

userRouter.get("/users", getAllOrders);
userRouter.post("/users", createOrder);

export default orderRouter;
