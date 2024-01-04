import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRouter } from './routes/login';
dotenv.config();

const app = express();
const URI = process.env.URI || "mongodb+srv://maornetzer9:Maor013254777@maor.quyl8kx.mongodb.net/Netfilx";
const FRONTEND_PORT = process.env.PORT || 3000;
const BACKEND_PORT = process.env.PORT || 5050;

const corsOptions = {
    origin : 'http://localhost:3000',
    method: 'GET, HEAD, PUT, PATCH, POST, DELETE',
};


app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use('/user', userRouter)

mongoose.connect(URI)
.then(() => {
    const name = mongoose.connection.name;

    console.log({
        name, 
        Backend: BACKEND_PORT,
        Frontend: FRONTEND_PORT,
        connected: true
    })
})
.catch((err) => { console.log("Error connecting to MongoDB", err) });


app.listen(BACKEND_PORT, () => console.log(`Server Running On Port ${BACKEND_PORT}`));