import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import QuizRouter from "./routes/QuizRouter.js";

const app = express();
dotEnv.config();
 
const port = process.env.PORT;
const monclient = process.env.DB_URL;

// middleware
app.use('/api/quiz',QuizRouter);

app.listen(port,async(e)=> {
    if(e) return console.log(e);
    console.log(`Server is running on port ${port}`);

   const con = await mongoose.connect(monclient)
   console.log(`MongoDb connected: ${con.connection.host}`);
    
});

