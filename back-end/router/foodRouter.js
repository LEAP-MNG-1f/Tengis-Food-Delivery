import express from "express";
import { createFood, getAllFoods } from "../controllers/foodConrol.js";

const foodRouter = express.Router();

foodRouter.get("/foods", getAllFoods);
foodRouter.post("/foods", createFood);

export default foodRouter;
