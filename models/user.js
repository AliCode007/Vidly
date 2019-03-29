const mongoose=require('mongoose');
const Joi=require('joi');
const config=require('config');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    isAdmin:Boolean
});

userSchema.methods.generateAuthToken=function(){
    const token =jwt.sign({_id:this._id,isAdmin:this.isAdmin},config.get('jwtPrivateKey'));
    return token;
}

const User=new mongoose.model('User',userSchema);

function validateUser(user){
    const schema={
        name:Joi.string().min(5).max(50).required(),
        email:Joi.string().min(8).max(50).required().email(),
        password:Joi.string().min(8).max(50).required()
    }
    return Joi.validate(user,schema);
}

exports.User=User;
exports.validateUser=validateUser;



