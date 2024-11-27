import express from "express";
import {
  createCategory,
  getAllCategorys,
} from "../controllers/categoryControl.js";

const userRouter = express.Router();

userRouter.get("/users", getAllCategorys);
userRouter.post("/users", createCategory);

export default categoryRouter;
