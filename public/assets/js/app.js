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
    });
});

const renderResults = () => {};
