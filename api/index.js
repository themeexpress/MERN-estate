import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/user.route.js'
import dotenv from 'dotenv';

// init dotenv
dotenv.config()

//connect the MongoDB
mongoose.connect(process.env.MONGO).then(() => {
    console.log('connect to MangoDB');
    }).catch((err) =>{
        console.log(err)
    })

const app = express();

app.listen(3000, () => {
    console.log("server is running on port 3000!!!")
})

// test route
app.use('/api/user', userRouter);
