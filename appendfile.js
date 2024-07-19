var http= require('http');
var fs= require('fs');

fs.appendFile('myfile.txt','This is appending using node', function(err){
    if(err) console.log('replace the exiting file?');
    console.log('saved');
});