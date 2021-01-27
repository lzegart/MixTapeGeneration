let songInput;
let addToPlaylist;
let removeFromPlaylist;
let songList;
let createPlaylistBtn;

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
  createPlaylistBtn = document.getElementById("create-playlist-btn");
  console.log("This is true");
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded! 🚀");
});

//create a function for each api route (songs, playlists)

// Create a playlist
const createPlaylist = (title, songList) => {
  let playlistData = {
    playlist_name: title, 
    song_list: songList,
  }
  fetch ('/api/playlist/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playlistData),
  })
    .then(getPlaylists)
    .catch((err) => console.error(err));
};
createPlaylistBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let playlistName = document.getElementById("playlist-name").value;
    if (!playlistName.trim()) {
      alert('Please provide a name for your playlist!');
      return;
  }
  // get the songs however they're organized on the page
  songList = document.querySelectorAll(".list-container .list-group");
  createPlaylist(playlistName, songList);
})

// Delete playlist
const deletePlaylist = (id) => {
  fetch(`/api/playlist/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
};
// add event listener once you know id form from html


// Event handler for the rename playlist button
const renamePlaylist = (id, name) => {
  let nameId = {
    id: id,
    name: name,
  }
   fetch(`/api/playlist/update_name`, {    
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nameId),
  })
};

// // Create list row for playlists (DO WE NEED THIS? ...it's from the authors blog thing...)
// const createPlaylistRow = (playlistData) => {
//   const row = document.createElement('row');
//   row.setAttribute('data-playlist', JSON.stringify(playlistData));
// }

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
