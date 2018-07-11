var mongoose = require('mongoose');
var userSchema = require('./Schema')

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Alumnos', {useMongoClient:true});

//Modelo
var User = mongoose.model('User',Schema,"blogs");

//Actualizacion de Documento en MongoDB
User.update({_id: '5941ef175ac0361d298c8217'}, {$set:{hidden:'true'}},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("----------Actualizacion-------------");
    console.log(docs);
    process.exit(0);
});
