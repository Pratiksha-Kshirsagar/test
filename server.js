var express=require("express");
var app=express();
var path =require("path");
var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);
app.listen(1081);
console.log("port : 1081");