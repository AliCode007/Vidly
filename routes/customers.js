const mongoose=require('mongoose');
const express=require('express');
const {Customer}=require('../models/customer');
const router=express.Router();



router.get('/',async (req,res)=>{
    try{
        const customers=await Customer.find();
        res.send(customers);
    }catch(err){
        res.send(err.message);
    }
});

router.get('/:id',async (req,res)=>{
    try{
        const customer=await Customer.findById(req.params.id);
        res.send(customer);
    }catch(err){
        res.send(err.message);
    }


});

router.put('/:id',async (req,res)=>{
    try{
        const result=await Customer.findByIdAndUpdate({_id:req.params.id},{
            $set :{
                name: req.body.name,
                isGold:req.body.isGold,
                phone:req.body.phone
            }
        });
        res.send(result);
    }catch(err){
        res.send(err.message);
    }

});

router.post('/',async (req,res)=>{
   let customer=new Customer({
       name: req.body.name,
       isGold:req.body.isGold,
       phone: req.body.phone
   });
   try{
       const result=await customer.save();
       res.send(result);
   }catch(err){
        res.send(err.message);
   }
    

});

router.delete('/:id',async (req,res)=>{
    try{
        const result=await Customer.findByIdAndDelete(req.params.id);
        res.send(result);
    }catch(err){
        res.send(err.message);
    }
});
 
module.exports=router;


