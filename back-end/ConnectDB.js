import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://tengisbatbold11:Tengis0808@tengis-food.psict.mongodb.net/food-delivery";

const ConnectDB = async () => {
  const client = new MongoClient(connectionString);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("sample_mflix");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    throw error;
  }
};

export default ConnectDB;
