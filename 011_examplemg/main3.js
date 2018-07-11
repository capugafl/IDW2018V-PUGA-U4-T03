var mongoose = require('mongoose');
var userSchema = require('./user2Schema')

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Alumnos', {useMongoClient:true});

//Modelo
var User = mongoose.model('User3',userSchema,"user3");

//Documento en MongoDB
User.create({name: 'User 3', email: 'user3@ittepic.edu.mx'},
  function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado User 3");
});