// Requiring our models and passport as we've configured it
const db = require("../models");
const axios = require("axios");
const { Router } = require("express");

// Router.get('/api/search/:query', (req, res)=>{
//     const querystring = req.params.query;
//   axios.get(`https://api.napster.com/v2.2/search/verbose?apikey=${process.env.APIKEY}&query=${querystring}&type=track&per_type_limit=10`)
//     .then(data => {
//         var response = data.data
//         // console.log(response)
//         var tracks = response.search.data.tracks
//         // console.log(tracks)
//         const trackArr = [];
//         tracks.forEach(element => {
//             // console.log({song: element.name, artist: element.artistName})
//             trackArr.push({song: element.name, artist: element.artistName})
//         });
//         console.log(trackArr)
//         res.json(trackArr)
//     })
//     .catch(err => {
//         res.status(500).json({"message": err})
//     })
// })

// module.exports = Router;

//*
module.exports = (app) => {
  app.get("/api/search/:query", (req, res) => {
    const querystring = req.params.query;
    axios
      .get(
        `https://api.napster.com/v2.2/search/verbose?apikey=${process.env.APIKEY}&query=${querystring}&type=track&per_type_limit=10`
      )
      .then((data) => {
        var response = data.data;
        // console.log(response)
        var tracks = response.search.data.tracks;
        // console.log(tracks)
        const trackArr = [];
        tracks.forEach((element) => {
          // console.log({song: element.name, artist: element.artistName})
          trackArr.push({ title: element.name, artist: element.artistName });
        });
        console.log(trackArr);
        res.json(trackArr);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
//*/
