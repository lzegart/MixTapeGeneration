const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const session = require("express-session");
const passport = require("./config/passport");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// needs the JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/MTG-controllers.js");
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.use(routes);

const db = require("./models")
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});