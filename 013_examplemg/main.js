var mongoose = require('mongoose');
var userSchema = require('./userSchema')

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Alumnos', {useMongoClient:true});

//Modelo
var User = mongoose.model('User',userSchema,"user");

//Consulta de Documento en MongoDB
User.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("----------Consulta General-------------");
    console.log(docs);
});