var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

var routes = require("")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function(){
    console.log("server listening on port: " + PORT);
});
