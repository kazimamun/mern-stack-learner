const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.json({
        message : 'welcome to our application'
    })
})

const port = process.env.PORT || 4000;
const mongoUri = 'mongodb+srv://mern:mern123@cluster0.g1juc.mongodb.net/mernDb?retryWrites=true&w=majority'
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
    mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
        console.log('database connected');
    })
})