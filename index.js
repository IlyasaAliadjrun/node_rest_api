import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT_URL;

mongoose
    .connect(
        process.env.MONGO_URL,
        {useNewUrlParser:true}
    )
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(error => {
        console.log(`Something wrong with this ${error}`)
    })

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})