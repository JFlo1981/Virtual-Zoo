// const path = require("path");
// const express = require("express");
// const session = require("express-session");
// const exphbs = require("express-handlebars");

// const app = express();
// const PORT = process.env.PORT || 3001;

// const sequelize = require("./config/connection");
// const helpers = require("./utils/helpers");
// const hbs = exphbs.create({ helpers });

// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use(require("./controllers/"));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });

// Used from Jarod's branch for testing, will delete for merge w/ sandbox branch
