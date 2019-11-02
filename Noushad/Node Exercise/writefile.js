var fs=require("fs");
fs.writeFile('test.txt',"Writing file",function(err){

    if(err)
    console.log(err);
    else
    console.log("write operation complete");
    
});