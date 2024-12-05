import mongoose from "mongoose";

const roleEnum = {
  values: ["name", "user"],
};

const categorySchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true, trim: true },
  foodIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
});

export const Category = mongoose.model("Category", categorySchema);  
