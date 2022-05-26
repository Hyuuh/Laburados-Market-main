const { TypedEventEmitter } = require('mongodb');
const mongoose = require('mongoose');
const express = require('express');
const usuarios = require('../post/register.post');
const { use } = require('express/lib/application');
const app = express();
const url = 'mongodb+srv://Student:Student072006@cluster0.hkl0s.mongodb.net/users'

app.get('/', (req,res)=>{

});

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})


.then(()=>{
    console.log("Conexión correcta");
  })
  .catch(err =>{
    console.log(err);
  })


  const usersSchema = mongoose.Schema({
   usuario:String,
   password:String,
   tokens:Number

},{versionKey: false})

 const UserModel = mongoose.model('users', usersSchema)


 const mostrar = async()=>{
   const usuarios = await UserModel.find()
    console.log(usuarios)
}


app.post('/register', (req,res)=>{
  const {usuario, password} = req.body;

  const usuarios = new usuarios({usuario, password})
  use.save(err =>{
    if(err){
    res.status(500).send('ERROR AL REGISTRAR EL USUARIO');
  }else{
    res.status(200).send('USUARIO REGISTRADO CORRECTAMENTE')
  }
  })
});


app.post('/login', (req,res)=>{


});



mostrar()