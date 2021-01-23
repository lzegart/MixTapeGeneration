// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = (app) => {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
    });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
    app.post("/api/signup", function(req, res) {
    db.User.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(function() {
        res.redirect(307, "/api/login");
        })
        .catch(function(err) {
        res.status(401).json(err);
        });
    });

  // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

  // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
        res.json({});
    } else {  
        res.json({
          username: req.user.username,
          library: req.body.library
        })     
        // const returnObject = {}
        // returnObject.username = req.user.id
        //use user id to find playlists on the database
        // db.Playlist.findAll({ where: returnObject }).then((dbPlaylist) => res.json(dbPlaylist))
        // let userPlaylists = []
        // array.forEach(playlist => {
        // playlist.push(userPlaylists)
        // });
            //each playlist iteration:
                //add the playlist to [] (name and id)
                    //returnObject.playlists[i].songs = []
                    //use each playlist id to find the songs * on the database (second db search)
                        //for each song: second iteration
                            //add each song to the playlis
                            //returnObject.playlists[i].songs.push(songs[i])

        //res.json(returnObject);  //return object

        //name : username
        //playlists : [] {}
                //playlist name
                //playlist id
                //songs: []
                    //song info 
    }
});

  //-----------additional api --------------------------
  //add playlist
  //add song to playlist
  //delete song from playlist
};