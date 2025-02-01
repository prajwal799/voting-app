const db = require('./db.js');
const express = require('express');
const app = express();
const User = require('./models/user.js');
const body = require('body-parser');
const userRouter = require('./routes/userRoutes.js');
const candidateRouter = require('./routes/candidatesRouter.js');
app.use(body.json());

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.use('/user', userRouter);
app.use('/candidate', candidateRouter);

app.listen('4000', () => {
    console.log('Server is running on port 4000');
})