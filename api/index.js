import dotenv from "dotenv"
import express from "express"

// import connectDb from "./db/index.js";
import mongoose from "mongoose";

dotenv.config({path:'./env'})
const app=express();
mongoose.connect(process.env.MONGO)
        .then(()=>{
            console.log("connected to db")
        })
        .catch((err)=>{
            console.log(err)
        })
// connectDb()
// .then(()=>{
//     app.listen(process.env.PORT || 8000,()=>{
//         console.log(`server is listening at ${process.env.PORT}`)
//     })
// })
// .catch((err)=>{
// console.log("Mongodb connection failed!!",err)
// })

app.listen(process.env.PORT || 8000, () => {
    console.log('Server listening on port 3000');
  });
  