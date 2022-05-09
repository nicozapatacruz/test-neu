const express = require("express");
const path = require("path");

const numerosRoutes = require("./routes/numerosRoutes");
const app = express();

const methodOverride = require("method-override");
const { localsName } = require("ejs");
app.use(methodOverride("_method"));

// view engine setup
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(numerosRoutes);

app.listen("3001", () => console.log("Servidor corriendo en el puerto 3001"));
