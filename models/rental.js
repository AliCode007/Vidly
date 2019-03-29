const mongoose=require('mongoose');
const Joi=require('joi');

const rentalSchema=mongoose.Schema({
    customer :{
        type: new mongoose.Schema({
            name:{
                type:String,
                required:true,
                minLength:3,
                maxLength:10
            },
            isGold:{
                type:Boolean
            },
            phone:{
                type:String,
                required:true,
                minLength:5,
                maxLength:10
            }
        }),
        required:true
    },
    movie: {
        type:new mongoose.Schema({
            title:{
                type:String,
                required:true,
                minLength:3,
                maxLength:20
            },
            dailyRentalRate:{
                type:Number,
                required:true,
                min:0,
                max:255
            }
        })
    },
    dateOut:{
        type:Date,
        required:true,
        default:Date.now
    },
    dateReturned :{
        type:Date
    },
    rentalFee:{
        type:Number,
        min:0
        
    }
});

const Rental=mongoose.model("rental",rentalSchema);

function validateRental(rental){
    const schema ={
        customerId:Joi.objectId().required(),
        movieId:Joi.objectId().required()
    }
    return Joi.validate(rental,schema);
}

module.exports.Rental=Rental;
module.exports.validateRental=validateRental;