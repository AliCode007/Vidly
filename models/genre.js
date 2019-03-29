const mongoose=require('mongoose');

const genreSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:3,
        maxlength:10
    }
});
const Genre=mongoose.model('Genre',genreSchema);

module.exports.Genre=Genre;
module.exports.genreSchema=genreSchema;

