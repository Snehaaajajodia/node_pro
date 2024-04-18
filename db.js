const mongoose=require("mongoose");
// define url
// const mongourl='mongodb://localhost:27017/snehadatabase';            
const mongourl='mongodb+srv://Snehajajodia:<4jfSfAgIb7oyjqK9>@cluster0.yle4a4b.mongodb.net/';

mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true, 
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("congrats,You are connected to Mongodb server")
})
db.on('error',(err)=>{
    console.log("Mongodb connection error",err);

});
db.on('disconnected',()=>{
    console.log("Mongodb disconnected");
});

// export the database connection 
module.exports=db;
// i made a change 
// i made a change for check purpose
