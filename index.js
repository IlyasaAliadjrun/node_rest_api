import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import shoesRoute from './routes/shoes.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT_URL;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/shoes', shoesRoute);

//connect to mongodb
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

//starting port
app.listen(PORT, (req, res) => {
    console.log(`Server started at port ${PORT}`)
})