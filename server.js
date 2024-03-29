const express = require("express");
const exphbs = require("express-handlebars");

require("dotenv").config();

const router = require("./controllers/burgers_controller");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);

app.listen(PORT, function () {
    console.log(`Server listening on PORT: ${PORT}`);
});
