import { User } from "../model/users";

const createUser = async (req, res) => {
  try {
    const result = await User.create({
      name: "Tengis",
      email: "tengisbstbold11@gmail.com",
      password: "tengis0808",
      phoneNumber: 88664132,
    });

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await User.find().lean();
    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};

export { createUser, getAllUsers };
