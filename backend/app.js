const express = require('express'); //module
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Thing = require('./models/Thing');

const app = express()//initialization

//connecter à la bdd
mongoose.connect('mongodb+srv://camille:Cg260205@cluster0.ahfcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//inscription
app.post("/api/inscription", (req, res, next)=>{
  const thing = new Thing({
    ...req.body
  });
  thing.save()
    .then(()=> res.status(201).json({message: 'Objet enregistré avec sucess!!'}))
    .catch(error => res.status(400).json({error}));
    console.log(thing)
});

//login
app.post('/api/login', (req, res, next)=> {
  Thing.findOne({ mail : req.body.maillogin, password : req.body.passwordlogin})
    .then(thing => res.redirect(`/api/utilisateur:${thing._id}`))
    .catch(error => res.status(400).json({error}));
});


  module.exports = app;