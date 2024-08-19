import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import helpcardRouter from './router/help_card.route.js'
const app = express();

dotenv.config({
    path: './.env'
})
mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`).then(() => {
    console.log('database is connect successfully');
}).catch((error) => {
    console.log(error.message);
})
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api/v1/helpcard',helpcardRouter)
app.listen(process.env.PORT, () => {
    console.log(`Server start at: ${process.env.PORT} `);
})