import express, { response } from "express"
import cors from "cors";

const server = express();
const PORT = 8000

server.use(cors()); 

server.get("/", (request, response) => {
  response.send(["Billy", "Dashka", "tugo"]);
});

server.post("/image-upload", async (request, response)=>{
  try{
    cloudinary.config({
      cloud_name: "dnpz00ede",
      api_kye:"175773895774956",
      api_secret: "_Cy4dGK2gQIgCgSHVVHhhIu4A8",
    });
    
    const uploadResult = await cloudinary.uploader.upload("./assets");
    console.log(uploadResult);
  }catch(error){
    console.log("cloudinary error", error);
  }
});

server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT} ajillaj bna`)
});