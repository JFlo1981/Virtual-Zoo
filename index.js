const express = require("express");
const app = express();
const port = 3001;
const { engine } = require("express-handlebars");
const path = require("path");
 
app.set("view engine", "handlebars");
 
app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts",
  })
);
 
app.use(express.static(path.join(__dirname, "public")));
 
app.get("/", (req, res) => {
  res.render("index", { layout: "main" });
});
 
app.listen(port, () => console.log(`App listening to port ${port}`));
 
app.set("view engine", "hbs");
 
app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
  })
);
