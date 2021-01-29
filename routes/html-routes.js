// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });

};
