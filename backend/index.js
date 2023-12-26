import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import chatRoutes from './Routes/chatRoutes.js'
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome');
})

app.use('/chat', chatRoutes);

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('DB connected');
        app.listen(PORT, ()=>{
            console.log(`App is listening to port ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })