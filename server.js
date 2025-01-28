const db = require('./db.js');
const Menu = require('./menu.js');
const express = require('express');
const app = express();

const body = require('body-parser');
app.use(body.json());



app.get('/', function(req,res){
    res.send('Hello new connected');
});

const PersonRouter = require('./routes/personRouter.js');
const MenuRouter = require('./routes/menuRouter.js');

app.use('/person', PersonRouter);

app.use('/menu',MenuRouter);



app.listen(3000, () =>{
    console.log('server is running on port 3000');
});