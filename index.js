const express = require("express");
const app = express();

const expressHbs = require("express-handlebars");

app.engine(
  "hbs",
  expressHbs.engine({
    layoutDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    defaultLayout: "layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/Handlebars-StaticFiles"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/task1", require("./routes/task1Route"));

app.get("/task2", (req, res) => {
  res.render("task2");
});

app.get("/task3", (req, res) => {
  res.render("task3");
});

app.get("/task4", (req, res) => {
  res.render("task4");
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("Server is running on port " + app.get("port"));
});
