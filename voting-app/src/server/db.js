const mongoose = require('mongoose');
const mongooseUrl = 'mongodb://localhost:27017/voting-app';

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