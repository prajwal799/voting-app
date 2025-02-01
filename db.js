const mongoose = require('mongoose');

const mongooseUrl =  'mongodb://127.0.0.1:27017/hotel';
//const mongooseUrl = 'mongodb+srv://prajwalgoyal1999:rJ5Y7nMIVb7wrMWz@cluster0.8huie.mongodb.net/'

mongoose.connect(mongooseUrl, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on('connected', function(){
    console.log('Connected to MongoDB');
});

db.on('error', function(err){
    console.log('Error connecting to MongoDB', err);
});

db.on('disconnected', function(){
    console.log('Disconnected from MongoDB');
});

module.exports = db;