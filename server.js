const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
require('dotenv').config()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// needs the JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/search-api-routes.js")(app);
require("./routes/playlist-api-routes.js")(app);
require("./routes/songs-api-routes.js")(app);

const db = require("./models")
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});