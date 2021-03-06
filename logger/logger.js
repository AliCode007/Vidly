const winston=require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console({format : winston.format.simple()})
    ]
  });

logger.exceptions.handle(
    new winston.transports.File({filename:'uncaughtExceptions.log'})
);
process.on('unhandlerRejection',(ex)=>{
  throw ex;
});

module.exports=logger;