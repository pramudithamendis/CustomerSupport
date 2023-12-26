import express from "express";
import { chatModel } from "../models/chatModel.js";

const router = express.Router();

router.post('/create', async (request,response)=>{
    try {
        if(
            !request.body.title ||
            !request.body.vehicle ||
            !request.body.issue 
        ){
            return response.status(400).send('Send all the required fields');
        }

        const newChat = {
            title: request.body.title,
            vehicle: request.body.vehicle,
            sets: request.body.issue
        }

        const chat = await chatModel.create(newChat);
        return response.status(201).send(chat);
    } catch (error) {
        
    }
})

export default router;