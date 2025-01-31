const db = require('./db.js');
const express = require('express');
const app = express();
const Person = require('./person.js');
require('dotenv').config();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const body = require('body-parser');
app.use(body.json());

passport.use(new LocalStrategy( async (USERNAME, password, done) => {
    try{
        const user = await Person.findOne({userName: USERNAME});
        if(!user){
            console.log('Invalid username');
          return done(null, false,{message: 'Invalid username'});
        }
        const isPasswordValid = user.password === password ? true : false;
        if(isPasswordValid){
            return done(null,user);
        }
        else{
            return done(null, false, {message: 'Invalid password'});
        }

    }catch(err){
       done(err);
    }

}));

app.use(passport.initialize());


app.get('/', function(req, res, next) {
    req.body.username = req.query.userName;
    req.body.password = req.query.password;
    next();
}, passport.authenticate('local', {session: false}), function(req, res){
    console.log("1111");
    res.send('Hello new connected');
});

const PersonRouter = require('./routes/personRouter.js');
const MenuRouter = require('./routes/menuRouter.js');

app.use('/person', PersonRouter);

app.use('/menu',MenuRouter);

const port = process.env.PORT || 3000;

app.listen(3000, () =>{
    console.log('server is running on port 4000');
});