import mongoose from "mongoose";

const roleEnum = ["user", "admin", "moderator"];

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: roleEnum,
    default: "user",
  },
});

export const User = mongoose.model("User", userSchema);
