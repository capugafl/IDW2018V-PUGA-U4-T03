var mongoose = require('mongoose');
var userSchema = require('./user2Schema')

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Alumnos', {useMongoClient:true});

//Modelo
var User = mongoose.model('User2',userSchema,"user2");

//Documento en RAM
var user2 = new User({
    name:"User 2",
    email:"user2@ittepic.edu.mx",
});

//Documento en MongoDB
User.create(user2, function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado User 2");
});
