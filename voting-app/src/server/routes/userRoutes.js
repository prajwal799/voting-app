const express = require('express');
const User = require('../models/user.js');
const userRouter = express.Router();
const {generateToken} = require('../jwt.js');

userRouter.post('/', async (req,res) => {
    try{
        const data = req.body;
        console.log(data, "!!!!!!");
    const newUSer = new User(data);
    const dataSave = await newUSer.save();
    const payload = {
        id: dataSave.id
    }
    console.log(JSON.stringify(payload));
    const token = generateToken(payload);
    res.status(200).json({response: dataSave, token: token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }

});

userRouter.get('/', async (req,res) => {
    try{

        const data = await User.find();
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

userRouter.put('/:id', async (req,res) => {
    try{
        const userId = req.params.id;
        const updatedData = req.body;
        const response = await User.findByIdAndUpdate(userId, updatedData,{
            new: true,
            runValidators: true
        });
        if(!response){
            res.status(404).send('Person not found');
        }
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }

});    


userRouter.delete('/:id', async (req,res) => {
    try{
        const userId = req.params.id;
        const response = await User.findByIdAndDelete(userId);
        if(!response){
            res.status(404).send('User not found');
        }

        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})

module.exports = userRouter;