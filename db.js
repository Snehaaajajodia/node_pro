const mongoose=require("mongoose");
// define url
const mongourl='mongodb://localhost:27017/snehadatabase';            
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
