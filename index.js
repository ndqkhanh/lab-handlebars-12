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

app.use("/", (req, res) => {
  res.render("index");
});
app.use("/index", (req, res) => {
  res.render("index");
});
app.use("/task1", require("./routes/task1Route"));
app.use("/task2", (req, res) => {
  res.render("task2");
});
app.use("/task3", (req, res) => {
  res.render("task3");
});
app.use("/task4", require("./routes/task4Route"));

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("http://localhost:3000");
});
