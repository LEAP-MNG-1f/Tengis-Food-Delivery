import express, { response } from "express"
import cors from "cors";
import {v2 as cloudinary} from "cloudinary"
const server = express();
const PORT = 8000

server.use(cors()); 
server.post("/image-upload", async (request, response)=>{
  try{
    cloudinary.config({
      cloud_name: "dwm2mie3c",
      api_key:"257275265174362",
      api_secret: "V_k2DSUgZStwgIunis7GTWNraJA",
    });
    
    const uploadResult = await cloudinary.uploader.upload("./asset/budaa.png");
    response.json(uploadResult)
  }catch(error){
    console.log("cloudinary error", error);
  }
});

server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT} ajillaj bna`)
});