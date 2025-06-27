const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

const app = express();
dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to MongoDB..!"))
.catch((err) => console.log(err));


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use('/api/auth',authRoute);
app.use('/api/post',postRoute)


app.get('/', (req,res) =>{
    res.send("Welcome to the home page")
});

app.get('/users', (req,res) =>{
    res.send("Welcome to the user page")
});




app.listen(3000, ()=>{
    console.log("Server is running..!")
})