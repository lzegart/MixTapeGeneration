// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const axios = require("axios");
require('dotenv').config()

module.exports = function(app) {
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
    app.get("/api/user_data:id", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
        res.json({});
    } else {       
        const returnObject = {}
        returnObject.username = req.user.id
        //use user id to find playlists on the database
        db.Playlist.findAll({ where: returnObject }).then((dbPlaylist) => res.json(dbPlaylist))
        let userPlaylists = []
        array.forEach(playlist => {
          playlist.push(userPlaylists)
        });
            //each playlist iteration:
                //add the playlist to [] (name and id)
                    //returnObject.playlists[i].songs = []
                    //use each playlist id to find the songs * on the database (second db search)
                        //for each song: second iteration
                            //add each song to the playlis
                            //returnObject.playlists[i].songs.push(songs[i])

        res.json(returnObject);  //return object

        //name : username
        //playlists : [] {}
                //playlist name
                //playlist id
                //songs: []
                    //song info 
    }
});

app.delete('/api/songs/:id', (req, res) => {
  db.Songs.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbPlaylist) => res.json(dbPlaylist));
});

app.post('/api/playlist', (req, res) => {
  db.Playlist.create(req.body).then((dbPlaylist) => res.json(dbPlaylist));
});
  //-----------additional api --------------------------
  //add playlist
  //add song to playlist
  //delete song from playlist
  

  
  const querystring = "love";
  axios.get(`https://api.napster.com/v2.2/search/verbose?apikey=${process.env.APIKEY}&query=${querystring}&type=track&per_type_limit=10`)
    .then(data => {
        var response = data.data
        // console.log(response)
        var tracks = response.search.data.tracks
        // console.log(tracks)
        const trackArr = [];
        tracks.forEach(element => {
            // console.log({song: element.name, artist: element.artistName})
            trackArr.push({song: element.name, artist: element.artistName})
        });
        console.log(trackArr)
        res.json(trackArr)
    })


};



const querystring = "love";

axios.get(`https://api.napster.com/v2.2/search/verbose?apikey=${process.env.APIKEY}&query=${querystring}&type=track&per_type_limit=10`)
    .then(data => {
        var response = data.data
        // console.log(response)
        var tracks = response.search.data.tracks
        // console.log(tracks)
        const trackArr = [];
        tracks.forEach(element => {
            // console.log({song: element.name, artist: element.artistName})
            trackArr.push({song: element.name, artist: element.artistName})
        });
        console.log(trackArr)
        res.json(trackArr)
    })
