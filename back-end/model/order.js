import mongoose from "mongoose";


const roleEnum = ["active", "progress", "waiting", "delivered"];

const orderSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true },
  orderNumber: { type: Number, required: true },
  foodIDs: { type: [mongoose.Schema.Types.ObjectId], required: true },
  totalPrice: { type: Number, required: true },
  district: { type: String, required: true },
  Khoroo: { type: String, required: true },
  Apartment: { type: String, required: true },
  role: { type: String, enum: roleEnum, default: "active" },
});

export const Order = mongoose.model("Order", orderSchema);
