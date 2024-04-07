const express=require('express');
const router=express.Router();
const menu=require('../models/menu');


router.post('/',async (req,res)=>{
    try{
        const data=req.body;
        const newmenu=new menu(data);

      const response =await  newmenu.save();
      console.log("data is saved");
      res.status(200).json(response);




    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});

    }

})

router.get('/',async(req,res)=>{

    try{
        const data= await menu.find();
        console.log('data is fetched');
        res.status(200).json(data);
      
    }catch(err){
    console.log(err);
    res.status(500).json({error:"internal server errror"});
    }

})


router.get('/:taste',async(req,res)=>{
    const taste=req.params.taste;

    try{
        if(taste=="spicy"||taste=="sour"||taste=="sweet"){
            const data= await menu.find({taste:taste});
            console.log('data is fetched');
            res.status(200).json(data);
        }else{
            res.status(404).json({error:"invalid tatsetype"})
        }
        
      
    }catch(err){
    console.log(err);
    res.status(500).json({error:"internal server errror"});
    }

})



module.exports=router;


