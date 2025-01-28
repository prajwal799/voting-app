const express = require('express');
const Person = require('../person.js');
const router = express.Router();

router.post('/', async (req,res) => {
    try{
        const data = req.body;

      const newPerson = new Person(data);
   
      const dataSave = await newPerson.save();
      console.log("Save data", dataSave);
      res.status(200).json(dataSave);

    }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal server error'});
    }
});


router.get('/', async (req,res) => {
    try{
        const data = await Person.find();
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

router.put('/:id', async (req,res) => {
    try{
        const personId = req.params.id;
        const updatedData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedData,{
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
})

router.delete('/:id', async (req,res) => {
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            console.log('Person not found');
            res.status(404).send('Person not found');
        }

        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

module.exports = router;