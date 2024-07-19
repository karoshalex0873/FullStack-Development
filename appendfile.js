var http= require('http');
var fs= require('fs');
http.createServer(function(req,res){
    fs.appendFile('myfile.txt','This is appending using node', function(err){
        if(err) console.log('replace the exiting file?');
        console.log('saved');
    });
    fs.readFile('myfile.txt',function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080)
