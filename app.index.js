const express = require('express');
const app = express();
const path = require('path');
var puerto = '7070'


app.listen(puerto, ()=>{
    console.log(`Aplicacion lista en http://localhost:${puerto}`)
});

app.set('view engine', 'ejs', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require('./routes/index.router')
app.use(router.routes)

//error 404
app.use('*', function(req, res, next) {
    res.status(404).render('cannot');
    next();
  });












