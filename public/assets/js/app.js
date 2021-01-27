let songInput;
let addToPlaylist;
let removeFromPlaylist;
let songList;

//   // UPDATE HERE
//   searchTrax.addEventListener("click", (event) => {
//     event.preventDefault();
//     fetch(``, {
//       // something
//     }).then((response) => {
//       console.log(response);
//     });
//   });
// });

if (window.location.pathname === "/") {
  songInput = document.getElementById("song-search");
  searchButton = document.getElementById("search-button");
  addToPlaylist = document.getElementById("add-song");
  removeFromPlaylist = document.getElementById("remove-song");
  songList = document.querySelectorAll(".list-container .list-group");
  console.log("This is true");
}

document.addEventListener("DOMContentLoaded", function () {
  // Handler when the DOM is fully loaded
});

//create a function for each api route (songs, playlists)

//create playlist
//return playlist

//create song
//return song

// ALEXIS CODE STARTS
let resultsbar = document.getElementById("resultsbar")
let savedplaylist = document.getElementById("savedplaylist")

const renderResults = (data) => {
let ulEl = document.createElement("ul");
console.log(ulEl);
for  (let i=0; i < data.length; i++) {
let liEl = document.createElement("li");
liEl.textContent = `song: ${data[i].song}  artist: ${data[i].artist}`
ulEl.append(liEl)
} console.log(ulEl);
resultsbar.append(ulEl)
};

// ALEXIS CODE ENDS


searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  let songTitle = songInput.value;
  console.log(songTitle);
  fetch(`/api/search/${songTitle}`)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      console.log(data);

      // ALEXIS ADDED LINE 68
     renderResults(data)
    });
});



