var express = require("express");
var path = require("path");
var PORT = 3000;
var app = express();



app.get("/", function(req,res){
	res.sendFile(path.join(__dirname,"/app/public/home.html"));
});

app.get("/about", function(req,res){
	res.sendFile(path.join(__dirname,"/app/public/about.html"));
});

app.listen(PORT, function(){
	console.log("app listening on:", PORT);
});


