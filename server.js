var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser"),
  controller = require("./controller/controller");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/routes");
routes(app);

app.listen(port);
console.log("API server started on: " + port);
