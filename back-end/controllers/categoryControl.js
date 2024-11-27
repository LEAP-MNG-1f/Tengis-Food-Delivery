import { Category } from "../model/category.js";

const createCategory = async (req, res) => {
  try {
    const result = await Category.create({
      _Id: "6746aa382a034160d556f851",
      name: "Tengis",
      foodID: "6746aa382a034160d556f853",
    });

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating category",
      error: error.message,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const result = await Category.find();

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching categories",
      error: error.message,
    });
  }
};

export { createCategory, getAllCategories };
