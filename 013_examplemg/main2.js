var mongoose = require('mongoose');
var userSchema = require('./user2Schema')

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Alumnos', {useMongoClient:true});

//Modelo
var User = mongoose.model('User',user2Schema,"user2");

//Consulta de Documento en MongoDB
User.find({email:'user2@ittepic.edu.mx'},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("----------Consulta con restriccion-------------");
    console.log(docs);
});