import { createOrder, getAllOrders } from "../controllers/orderControl.js";
import express from "express";

const orderRouter = express.Router();

orderRouter.post("/orders", createOrder);
orderRouter.get("/orders", getAllOrders);

export default orderRouter;
