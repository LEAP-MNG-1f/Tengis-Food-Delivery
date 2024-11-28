import express from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/categoryControl.js";

const categoryRouter = express.Router();

categoryRouter.get("/categorys", getAllCategories);
categoryRouter.post("/categorys", createCategory);

export default categoryRouter;
