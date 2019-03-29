const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();

const {Movie}=require('../models/movie');
const {Genre,genreSchema}=require('../models/genre');

router.get('/',async (req,res)=>{
    const movies=await Movie.find();
    res.send(movies);
});

router.get('/:id',async (req,res)=>{
    try{
        const movie=await Movie.findById(req.params.id);
        res.send(movie);
    }catch(err){
        res.send(err.message);
    }

});

router.post('/', async (req,res)=>{
    const genre=await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send('Invalid genre.');
     
    let movie=new Movie({
        title:req.body.title,
        genre:{
            name: genre.name
        },
        numberInStock:req.body.numberInStock,
        dailyRentalRate:req.body.dailyRentalRate
    });
    movie=await movie.save();
    res.send(movie);
});

router.put('/:id',async (req,res)=>{
    try{
        const result=await Movie.findByIdAndUpdate({_id:req.params.id},{
            $set :{
                title: req.body.title
            }
        });
        console.log(result);
        res.send(result);
    }catch(err){
        res.send(err.message);
    }

});
router.delete('/:id',async (req,res)=>{
    try{
        const result=await Movie.findByIdAndDelete(req.params.id);
        res.send(result);
    }catch(err){
        res.send(err.message);
    }
});

module.exports=router;
