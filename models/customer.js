const mongoose=require("mongoose");

const customerSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:3,
        maxlength:10
    },
    isGold :{
        type: Boolean,
        required:true
    },
    phone: {
        type :String,
        minlength:5
    }
});
const Customer=mongoose.model('Customer',customerSchema);
module.exports.Customer=Customer;