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
            issue: request.body.issue
        }

        const chat = await chatModel.create(newChat);
        return response.status(201).send(chat);
    } catch (error) {
        
    }
})


router.get('/chats', async (request,response)=>{
    try {
        const all = await chatModel.find({});
        return response.status(200).json(all);
        
    } catch (error) {
        
    }
})

router.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await chatModel.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Chat not found' })
        }
        return response.status(200).send({ message: 'Chat deleted successfully' });
        
    } catch (error) {
        
    }
})

router.get('/getchat/:id', async (request, response) => {

    try {
        const { id } = request.params;
        const as= await chatModel.findById(id);
        return response.status(200).json(as);

    } catch (error) {
        
    }
})


router.put('/edit/:id', async (request, response) => {

    try {
        if (
            !request.body.title ||
            !request.body.vehicle ||
            !request.body.issue
        ) {
            return response.status(400).send({
                message: 'Send all the required fields FOR THE UPDATING'
            })
        }
         const { id } = request.params;
        const result = await chatModel.findByIdAndUpdate(id, request.body)
        if (!result) {
            return response.status(404).json({
                message: 'Chat not found'
            })
        }
        return response.status(200).send({
            message: 'Chat updated successfully'
        })


    } catch (error) {
        
    }
})

export default router;