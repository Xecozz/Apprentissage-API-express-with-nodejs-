const express = require('express');
const bodyParser = require("body-parser");

const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post("/api/test", (req, res, next)=>{
    let p1 = req.body.p1; 
    console.log( p1);
    res.status(200).json({message : "requete reçue !!!"});
  });

  module.exports = app;