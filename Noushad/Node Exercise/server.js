var http=require('http');

//server object creation
var server=http.createServer(function(req,res){
    res.write('Hello...........');
    res.end();

});
server.listen(8080,function(){
    console.log('listening on 8080')
});


