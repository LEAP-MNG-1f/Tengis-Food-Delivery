import { User } from "../users.js";

const createUser = async (request, response) => {
  try {
    const result = await User.create({
      name: "Tengis",
      email: "tengisbstbold11@gmail.com",
      password: "tengis0808",
      phoneNumber: 88664132,
    });

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
  }
};

const getAllUsers = async (request, response) => {
  try {
    const result = await User.find().lean();
    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};

export { createUser, getAllUsers };
