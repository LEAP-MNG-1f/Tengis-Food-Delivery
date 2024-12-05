import { MongoClient } from "mongodb";

mongoose
  .connect(
    "mongodb+srv://tengisbatbold11:Tengis0808@tengis-food.psict.mongodb.net/food-delivery",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));
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
