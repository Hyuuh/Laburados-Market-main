const express = require('express');
const app = express();
const path = require('path');
var puerto = '7070'
const dotenv = require('dotenv')
const varsession = require('./var.session/va.se');
const db = require('./mongodb/db.mongodb');





app.listen(puerto, ()=>{
    console.log(`Aplicacion lista en http://localhost:${puerto}`)
});

app.set('view engine', 'ejs');

dotenv.config({path:'./env/.env'});




app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require('./routes/index.router');
const { default: mongoose } = require('mongoose');
app.use(router.routes)

//error 404
app.use('*', function(req, res, next) {
    res.status(404).render('cannot');
    next();
  });


  










