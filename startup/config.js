const config=require('config');
module.exports=function(){
    const privateKey=config.get('jwtPrivateKey');
    if(!privateKey){
        console.log('No private Key');
        process.exit(1);
    }

}