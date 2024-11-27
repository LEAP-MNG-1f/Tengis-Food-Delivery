import { Food } from "../model/food";

const createFood = async (req, res) => {
  try {
    const result = await Food.create({
      _ID: "6746aa382a034160d556f851",
      name: "Tengis",
      image: "pizza.jpg",
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
    const result = await Food.find();

    res.json({
      success: true,
      data: result,
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
