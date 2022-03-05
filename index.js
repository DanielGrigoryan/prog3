var express = require("express");
var app = express();

app.use(express.static("gameOfLife"));

app.get("/", function(req, res){
   res.redirect("html.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});


var fs = require('fs');



var statistics = {};
let a = 0;

let b = 0;
setInterval(function() {
statistics.grass = a++;
statistics.grassEater = b++;
fs.writeFile("statistics.json", JSON.stringify( statistics), function(){
console.log("1223")
})
},6)