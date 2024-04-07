let ans=45;
console.log(ans);
var prompt=require('prompt-sync')();

// const a=40;
// a=78;
console.log(typeof ans);
const cars=["saab","volvo",32];
cars .push("hello");
console.log(cars);
if(ans<90){
    console.log("u are less than 90")
}
else{
    console.log("u are greater than 90");
}
const person={
    name:"sneha",
    age:"21",
    year:"third year",
    branch:"ECE",
    home:"Rosera"


};
console.log(person.age);
const ages=[32,33,34,40];
const result=ages.filter(checkage);
function checkage(age){
    if(age>=18){
        return age;
    }
}
console.log(result); 
let a=prompt("enter ur name");
console.log(a); 