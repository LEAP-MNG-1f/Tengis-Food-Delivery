import { Category } from "../model/category.js";

const createCategorys = async (req, res) => {
  try {
    const result = await Category.create({
      userID: "6746aa382a034160d556f851",
      name: "Tengis",
      foodIDs: ["6746aa382a034160d556c853"],
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

const getAllCategorys = async (req, res) => {
  try {
    const categorys = await Category.find()
      .populate("userID", "name email")
      .select("name foodIDs");

    res.status(200).json({
      success: true,
      data: categorys,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching categorys",
      error: error.message,
    });
  }
};

export { createCategorys, getAllCategorys };
