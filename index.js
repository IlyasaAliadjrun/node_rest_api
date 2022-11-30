import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import shoesRoute from './routes/shoes.js';
import winston from 'winston';

const app = express();
dotenv.config();

const PORT = process.env.PORT_URL;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//logger
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize({all: true})
            )
        }),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' })
    ]
})

//routes
app.use('/api/shoes', shoesRoute);

//connect to mongodb
mongoose
    .connect(
        process.env.MONGO_URL,
        {useNewUrlParser:true}
    )
    .then(() => {
        logger.info("Connected to MongoDB")
    })
    .catch(error => {
        logger.error(error.message)
    })

//starting port
app.listen(PORT, (req, res) => {
    logger.warn(`Server started at port ${PORT}`)
})

export default app;