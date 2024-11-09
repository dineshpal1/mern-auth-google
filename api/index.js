import dotenv from "dotenv"
import express from "express"
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import path from 'path';
// import connectDb from "./db/index.js";
import mongoose from "mongoose";

dotenv.config({path:'./env'})
const app=express();
app.use(express.static(path.join(__dirname, '/client/dist')));
const __dirname = path.resolve();
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
app.use(express.json());
app.use(cookieParser());
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

//   app.get("/",(req,res)=>{
//     res.json({msg:"API is working"})
//   });
  app.use("/api/user",userRoutes)
  app.use("/api/auth",authRoutes)

  //middleware
  app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message ||'Internal server error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    });
  })
  