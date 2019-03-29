const mongoose=require('mongoose');
const express=require('express');
const auth=require('../middleware/auth');
const admin=require('../middleware/admin');
const {Genre,genreSchema}=require('../models/genre');
const router=express.Router();





router.get('/', async (req,res)=>{
    const genres=await Genre.find()
                .select({name:1});
    res.send(genres);     
});

router.get('/:id',async (req,res)=>{
    try{
        const genre=await Genre.findById(req.params.id);
        res.send(genre);
    }catch(err){
        res.send(err.message);
    }


});

router.put('/:id',async (req,res)=>{
    try{
        const result=await Genre.findByIdAndUpdate({_id:req.params.id},{
            $set :{
                name: req.body.name
            }
        });
        res.send(result);
    }catch(err){
        res.send(err.message);
    }

});

router.post('/',[auth,admin],async (req,res)=>{
   let genre=new Genre({
       name: req.body.name
   });
   try{
       const result=await genre.save();
       res.send(result);
   }catch(err){
        res.send(err.message);
   }
    

});

router.delete('/:id',[auth,admin],async (req,res)=>{
    try{
        const result=await Genre.findByIdAndDelete(req.params.id);
        res.send(result);
    }catch(err){
        res.send(err.message);
    }
});
 
module.exports=router;


