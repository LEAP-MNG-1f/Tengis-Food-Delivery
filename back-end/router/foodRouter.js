import express from "express";
import { createFood, getAllFoods } from "../controllers/foodConrol.js";

const userRouter = express.Router();

userRouter.get("/users", getAllFoods);
userRouter.post("/users", createFood);

export default foodRouter;
