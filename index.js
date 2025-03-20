import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import {connectDb} from './config/db.js';

dotenv.config();
const app =express();
const PORT = process.env.PORT || 3001
connectDb();
app.get('/',(req, res)=>{
    res.send("hello")
})
app.listen(PORT,() =>{
console.log(`Server is running on port ${PORT}`)
});