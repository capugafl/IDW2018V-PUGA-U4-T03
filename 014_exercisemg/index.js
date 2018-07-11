var mongoose = require('mongoose');
var userSchema = require('./Schema')

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Alumnos', {useMongoClient:true});

//Modelo
var User = mongoose.model('User',Schema,"blogs");

//Consulta de Documento en MongoDB
User.find({autor:'Carlos Puga Flores'},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("----------Consulta con restriccion-------------");
    console.log(docs);
});