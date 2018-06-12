const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());


const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public'));

const routes = require("./controllers/burgersController.js");

app.use(routes);


app.listen(PORT, function() {
 
  console.log("Server listening on: http://localhost:" + PORT);
});
