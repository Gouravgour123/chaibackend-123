require('dotenv').config()
const express = require('express')
const app = express();

// const PORT = 3000;

app.get('/', (req,res)=>{
    res.send('hello')
})

app.get('/gour', (req,res)=>{
    res.send('world')
})

app.get('/login', (req,res)=>{
    res.send('<h1>chai or code</h1>')
})

app.listen(process.env.PORT , ()=>{
    console.log(`Example app listing on port ${process.env.PORT}`);
})