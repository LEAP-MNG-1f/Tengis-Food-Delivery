import { Order } from "../model/order.js";

const createOrder = async (req, res) => {
  try {
    const result = await Order.create({
      userID: "6746aa382a034160d556f851",
      orderNumber: 1,
      foodIDs: ["6746aa382a034160d556f853"],
      totalPrice: 215000,
      district: "BGD",
      Khoroo: "7",
      Apartment: "A17",
      role: "active",
    });

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating order",
      error: error.message,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userID", "name email")
      .select("orderNumber foodIDs totalPrice district Khoroo Apartment");

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching orders",
      error: error.message,
    });
  }
};

export { createOrder, getAllOrders };
