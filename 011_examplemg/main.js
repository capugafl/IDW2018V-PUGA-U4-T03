var mongoose = require('mongoose');
var userSchema = require('./userSchema')

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Alumnos', {useMongoClient:true});

//Modelo
var User = mongoose.model('User',userSchema,"user1");

//Documento en RAM
var user1 = new User({
    name:"User 1",
    email:"user1@ittepic.edu.mx",
});

//Documento en MongoDB
user1.save((error,data)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado User1"+data)
    process.exit(0);
});
