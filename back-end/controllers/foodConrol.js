import { Food } from "../model/food.js";

const createFood = async (req, res) => {
  try {
    const result = await Food.create({
      userID: "6746aa382a034160d556f654",
      name: "Pizza",
      image: "./pizza.png",
      price: 26500,
    });

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating food item",
      error: error.message,
    });
  }
};

const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find().populate("userID", "name email");
    res.status(200).json({
      success: true,
      data: foods,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching food items",
      error: error.message,
    });
  }
};

export { createFood, getAllFoods };
