import mongoose from "mongoose";

const roleEnum = {
  values: ["active", "progress", "waiting", "delivered"],
};

const orderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foodIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
      required: true,
    },
  ],
  totalPrice: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    enum: roleEnum.values,
    default: "progress",
  },
  createData: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
