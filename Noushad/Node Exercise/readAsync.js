const fs=require('fs');


//direct reading Asynch
fs.readdir('./',function(err,files){
    if(err)console.log('error,err');
    else console.log("files",files);
}
);