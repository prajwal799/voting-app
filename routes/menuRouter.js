const express = require('express');
const Menu = require('../menu.js');
const router = express.Router();


router.post('/', async (req,res) => {
    try{
        const data = req.body;
        const newMenu = new Menu(data);
        
        const dataSave = await newMenu.save();
        console.log("Save data", dataSave);
        res.status(200).json(dataSave);

    }catch(err){
        console.log(err);
        res.status(500).send();
    }
});

router.get('/', async (req,res) => {
    try{
        const data = await Menu.find();
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).send();
    }
});

module.exports = router;
