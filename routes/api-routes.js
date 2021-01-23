// Requiring our models and passport as we've configured it
const db = require("../models");
const axios = require("axios");
const { Router } = require("express");
require('dotenv').config()


// Router.get('/api/search', (req, res)=>{
//     const querystring = req.body.querystring;
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
        // res.json(trackArr) - <-- This code caused an error. Look at axopis read me for correct synthax
    })
};
//*/
