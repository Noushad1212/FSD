var http=require('http'),
url=require('url');


var server=http.createServer(function(req,res){
    var urlParts=url.parse(req.url);
    console.log(req,res,urlParts);


switch(urlParts.pathname){
    case "/":
        homepage(req,res);
        break;
    case "/read":
        read(req,res);
        break;
}
}

);

server.listen(8081);



function homepage(req,res){
    res.end("Hello...Home Page came")
}

function read(req,res){
    res.end("Hello,   No data for readig")
}
function update(req,res){
    res.end("Hello....No data for update");
}