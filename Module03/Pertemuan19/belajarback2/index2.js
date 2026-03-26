import express from "express";
// const express = require('express'); 
const port = 3000;
const app = express()
const routes = require('./routes');


app.use('/api', routes);
// app.get('/', (req, res) =>  {
//     res.status(200).send ({message: "hello world"})
// })

app.listen(port, () => {
    console.log("application run on port " , PORT)
});