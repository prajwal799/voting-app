const express  = require('express');
const Candidate = require('../models/candidate.js');
const User = require('../models/user.js');
const candidateRouter = express.Router();
const {jwtAuthMiddleware} = require('../jwt.js');

const checkAdminRole = async(userId) => {
    try{
        const user = await User.findById(userId);
        if(user.role === 'admin'){
            return true;
        }
    }catch(err){
        return false;
    }
}

candidateRouter.get('/', async (req,res) => {
    try{
        const data = await Candidate.find();
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

candidateRouter.post('/', jwtAuthMiddleware ,async (req,res) => {
    if(!(await checkAdminRole(req.user.id))){
        console.log(req.body.userId, "!!!!!");
      return res.status(401).json({error: 'Unauthorized'});
    }
    try{
        const data = req.body;
      const newCandidate = new Candidate(data);
      const candidateSave = await newCandidate.save();
      console.log("Save data", candidateSave);
      res.status(200).json(candidateSave);

    }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal server error'});
    }
});

candidateRouter.put('/:id', async (req,res) => {
    if(!await checkAdminRole(req.body.userId)){
      return res.status(401).json({error: 'Unauthorized'});
    }
    try{
        const personId = req.params.id;
        const updatedData = req.body;
        const response = await Candidate.findByIdAndUpdate(personId, updatedData,{
            new: true,
            runValidators: true
        });

        if(!response){
            res.status(404).send('Person not found');
        }
        res.status(200).json(response);

    }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal server error'});
    }
});
candidateRouter.delete('/:id', async (req,res) => {
    if(!await checkAdminRole(req.body.userId)){
      return res.status(401).json({error: 'Unauthorized'});
    }
    try{
        const personId = req.params.id;
        const response = await Candidate.findByIdAndDelete(personId);

        if(!response){
            res.status(404).send('Person not found');
        }
        res.status(200).json(response);

    }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal server error'});
    }
});

module.exports = candidateRouter;
