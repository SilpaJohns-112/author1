var express = require('express');
var app = express();
console.log("Hello World");
app.get("/", function(req, res) {
  

    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message":"HELLO JSON"});
      } else {
        res.json({"message":"Hello json"});
      }
  });

  app.use(function(req, res, next) {
      console.log(req.method + " " + req.path + "-" + req.ip);
      next();

  });


  

























 module.exports = app;
