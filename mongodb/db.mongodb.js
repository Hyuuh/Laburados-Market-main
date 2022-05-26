const { TypedEventEmitter } = require('mongodb');
const mongoose = require('mongoose');
const url = 'mongodb+srv://Student:Student072006@cluster0.hkl0s.mongodb.net/users'

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
   password:String

},{versionKey: false})

 const UserModel = mongoose.model('users', usersSchema)


 const mostrar = async()=>{
   const usuarios = await UserModel.find()
    console.log(usuarios)
}




mostrar()