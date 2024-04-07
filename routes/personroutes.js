const express=require('express');
const router=express.Router();
const person=require('./../models/person');


router.get('/:worktype',async(req,res)=>{ 
    const worktype=req.params.worktype;
    try{
        if(worktype=='chef'||worktype=='manager'||worktype=='waiter'){
         const response =await person.find({work:worktype});
         console.log('response fetched');
         res.status(200).json(response);
        }else{
            res.status(404).json({error:"invalid worktype"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"intrenal server error"})

    }
  


})


router.get('/',async (req,res)=>{
    try{
    const data=  await person.find();
    console.log('data fetched');
    res.status(200).json(data);
    }
    catch(err){
console.log(err);
res.status(500).json({error:'Internal Server Error'});

    }
})


router.post('/',async (req,res)=>{
   


    // const newperson=new person(data);
    // newperson.name=data.name;
    // newperson.age=data.age;
    // newperson.mobile=data.mobile;
    // newperson.email=data.email;
    // newperson.address=data.address;

    // newperson.save( (error,saveddata)=>{
    //     if(error){
    //         console.log('error saving data',error);
    //         res.status(500).json({error:'internal server problem'})
        
    //     }else{
    //    console.log('data saved successfully');
    //    res.status(200).json(saveddata);
    //     }
        
        
    //     }

 // )
 try{
    const data=req.body;
    const newperson=new person(data);

    const response=await newperson.save();
    console.log('data saved');
    res.status(200).json(response);
 }
 catch(err){
console.log(err);
res.status(500).json({error:'Internal Server Error'});
 }





})

router.put('/:id',async (req,res)=>{
    const personid=req.params.id;
    try{
const datatoupdate=req.body;
const response=await person.findByIdAndUpdate(personid,datatoupdate,{
    new:true,
    // return the updated document
    runValidators:true,
    // check all the validations
})
if(!response){
    return res.status(404).json({error:'person not found'});
}
console.log('data updated');
res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})

    }

})


router.delete('/:id',async(req,res)=>{
 const personid=req.params.id;

 try{
const response=await person.findByIdAndDelete(personid);
if(!response){
    return res.status(404).json({error:'person not found'});
}

console.log("data is deleted");
res.status(200).json({message:'person deleted successfully'})
 }
 catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'}); 
;
 }
})

module.exports=router;