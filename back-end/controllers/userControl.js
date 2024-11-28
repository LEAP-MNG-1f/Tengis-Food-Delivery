import { User } from "../model/users.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Tengis",
    email: "Tengis@gmail.com",
    password: "tengis0808",
    phoneNumber: 88624132,
  });
  response.json({ success: true, data: result });
};

const getAllUsers = async (request, response) => {
  const result = await User.findById({ _id: "674401077cdca8cdb0e9f22c" });
  console.log(result);
  response.json({ success: true, data: result });
};

export { createUser, getAllUsers };
