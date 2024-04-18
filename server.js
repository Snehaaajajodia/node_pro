// function add(a,b){ 
//     return a+b};
// var result =add(2,3);
// console.log(result);


// var add=function(a,b){
//     return a+b
//   }
// var ans=add(1,4);
// console.log(ans);


// var add=(a,b)=>{
//   return a+b;
// }

// var result=add(2,9);
// console.log(result);

// function callback(){
//   console.log("sneha is calling a callback function");
// }

// const add=function(a,b,callback){
//   var result=a+b;
//   console.log(result);
//   callback();
// }

// add(1,9,callback);

// add(1,9,function(){
//   console.log("add completed");
// })


// add(1,9,()=>{
//   console.log("completed");

// })

// var fs=require("fs");
// var os=require("os");

// var user =os.userInfo();
// console.log(user.username);
// fs.appendFile('greeting.txt','hi welcome to nodejs!!\n',()=>{
//   console.log("file is created");
// });
// console.log(fs);



// const notes=require('./notes.js');
// console.log("you are in server file")
// var age=notes.age;
// var result=notes.addnumbers(age,18);
// console.log(result);
// console.log(age);
// var lodash=require('lodash');
// var data=["person",1,1,2,2,'name','age','age'];
// var ans=lodash.uniq(data);
// console.log(ans);
// console.log(lodash.isString(3));

const express = require('express')
const app = express();
const db=require('./db')
const person=require('./models/person');
const menu=require('./models/menu');
const bodyparser=require('body-parser');
app.use(bodyparser.json());


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world...i m sneha')
})

app.get('/chicken',(req,res)=>{
    res.send("sure i will serve it") 

}) 

app.get('/idli',(req,res)=>{
    var customized_idli={
        name:"rava idli",
        size:"10 cm diam",
        is_chatni:"true",
        israsm:"true"
    };
    res.send(customized_idli)
})



app.post('/fromclient',(req,res)=>{
    res.send("data is save");
})


const personroutes=require('./routes/personroutes');
app.use('/person',personroutes);
const menuroutes=require('./routes/menuroutes');
app.use('/menu',menuroutes);


app.listen(4000,()=>{
    console.log('server is working')
});  































