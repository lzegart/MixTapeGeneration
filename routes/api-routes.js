// Requiring our models and passport as we've configured it
var db = require("../models");
const axios = require("axios");
require('dotenv').config()
 
module.exports = () => {
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
