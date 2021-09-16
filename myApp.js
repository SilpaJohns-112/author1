var express = require('express');
var app = express();
var bodyParser=require('body-parser');
console.log("Hello World");
app.get("/", function(req, res) {
  

    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));


/*app.get("/json", (req, res) => {
    
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message":"HELLO JSON"});
      } else {
        res.json({"message":"Hello json"});
      }
  }); */
  
  app.get("/json",(req,res,next) =>
    {
        console.log(req.method + " " + req.path + " - " + req.ip);
        next();
    });
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    //console.log(bodyParser);

    app.get(
        "/now",
        (req, res, next) => {
          req.time = new Date().toString();
          next();
        },
        (req, res) => {
          res.send({
            time: req.time
          });
        }
      );


app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});



app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;

res.json({
    name: `${firstName} ${lastName}`
  });
});


app.post("/name", function(req, res) {

    var string = req.body.first + " " + req.body.last;
    res.json({ name: string });
  });
























 module.exports = app;
