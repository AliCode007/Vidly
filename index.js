const express=require('express');
require('express-async-errors');
const logger=require('./logger/logger');
var app=express();

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/validation')();
require('./startup/config')();

app.listen(3000,()=>{
    logger.info('Listening on port 3000');
});
