import { request, response } from "express";
import { Order } from "./order";

const createOrder = async (request, response) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: "215000",
    customer: "6743f553f7907131039502db",
  });

  response.json({
    succes: true,
    data: result,
  });
};

const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("customer");

  response.json({
    succes: true,
    data: result,
  });
};
export { createOrder, getAllOrders };
