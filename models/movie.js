const mongoose=require('mongoose');
const {Genre,genreSchema}=require('../models/genre');

const movieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    genre:genreSchema,
    numberInStock:Number,
    dailyRentalRate:Number
});

const Movie=mongoose.model('Movie',movieSchema);

module.exports.Movie=Movie;