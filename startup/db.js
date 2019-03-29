const mongoose=require('mongoose');
const logger=require('../logger/logger');


module.exports=function(){
    mongoose.connect('mongodb://localhost/vidly',{ useNewUrlParser: true })
    .then(()=> logger.info('Connected.....'))
    .catch((err)=> logger.error('Connection Failed....'));
    mongoose.set('useCreateIndex', true);
}