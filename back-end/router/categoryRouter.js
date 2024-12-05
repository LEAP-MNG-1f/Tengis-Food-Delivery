import express from "express";
import {
  createCategorys,
  getAllCategorys,
} from "../controllers/categoryControl.js";
const categoryRouter = express.Router();

categoryRouter.get("/categorys", getAllCategorys);
categoryRouter.post("/categorys", createCategorys);

export default categoryRouter;
