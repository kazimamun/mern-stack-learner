const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = process.env.PORT || 4000;
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g1juc.mongodb.net/${process.env.DB_DB}?retryWrites=true&w=majority`


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
require('dotenv').config();


app.get('/',(req,res)=>{
    res.json({
        message : 'welcome to our application'
    })
});


app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
    mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
        console.log('database connected');
    })
});