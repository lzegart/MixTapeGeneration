let songInput;
let addToPlaylist;
let removeFromPlaylist;
let songList;
let sendTo;
let playlistGroup;
let active_playlist;

if (window.location.pathname === "/") {
  songInput = document.getElementById("song-search");
  playlistInput = document.getElementById("playlist-name");
  searchButton = document.getElementById("search-button");
  createButton = document.getElementById("create-button");
  addToPlaylist = document.getElementById("add-song");
  removeFromPlaylist = document.getElementById("remove-song");
  sendTo = document.querySelector(".to-playlist");
  savePlaylist = document.querySelector(".save-playlist");
  songList = document.querySelectorAll("#list-container .list-group");
  playlistGroup = document.querySelectorAll(".playlist-group");
  console.log("This is true");
}

document.addEventListener("DOMContentLoaded", function () {
  // Handler when the DOM is fully loaded
});

// temp song holder if the user wanted to push all songs to the playlist
let searchArray = [];
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
      searchArray = data;
      data.forEach((element) => {
        // to show all song results as button so we can have the user pick  single song to the playlist
        const songButton = document.createElement("button");

        songButton.append(`Title: ${element.title} Artist: ${element.artist}`);
        songButton.data = element;

        songList[0].appendChild(songButton);
        songButton.classList.add("btn-light", "btn");
        songButton.addEventListener('click', (e) => {
          e.preventDefault()
          saveSong(songButton.data)
        })
      });
      
    });
});

createButton.addEventListener("click", function(e){
  console.log('create button pressed')
  e.preventDefault()
  createPlaylist()
})

let playlistArray = [];

const setAcvitePlaylist = (playlist) => {
  //playlist is created -or-
  //plalist selected by user
  active_playlist = playlist
  //additional functionality
    //set playlist name
    //populate the playlist-group with this playlist's songs (after removing others)
}

const renderSongToPlaylist = (songData) => {
    // to show all song results as button so we can have the user pick  single song to the playlist
    
    const songButton = document.createElement("button");
    songButton.data = songData
    songButton.append(`Title: ${songData.title} Artist: ${songData.artist}`);
    playlistGroup[0].appendChild(songButton);
    songButton.classList.add("btn-light", "btn");

    songButton.addEventListener("click", function(e) {
      e.preventDefault()
      deleteSongFromPlaylist(songData, songButton)
    })
  
};

const createPlaylist = () => {
  let playlistName = playlistInput.value;
  const newPlaylist = {
    playlist_name: playlistName.trim(),
  };
  fetch("/api/playlist/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    // make sure to serialize the JSON body
    body: JSON.stringify(newPlaylist),
  }).then((response) => response.json())
    .then((data) => {

    console.log("Playlist created:", data);

    setAcvitePlaylist(data);
  })
  .catch((error) => console.error("Error:", error));
};

const saveSong = (data) => {
  //see if window.active_playlist exists
  if(!active_playlist) return;

  data.PlaylistId = active_playlist.id;

  fetch("api/songs/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    // make sure to serialize the JSON body
    body: JSON.stringify(data),
  }).then((response) => response.json())
  .then((data) => {

  console.log("Song created:", data);

  renderSongToPlaylist(data);
})
.catch((error) => console.error("Error:", error));

};

const savedPlaylist = document.querySelector(".saved-playlist");

const getOnePlaylist = () => {
  const playlistObj = {
    playlist_name: req.body.playlist_name,
  };
  fetch("/api/playlist/get_one/:id", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    // make sure to serialize the JSON body
    body: JSON.stringify(playlistObj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

//starter function to delete a song from a playlist
const deleteSongFromPlaylist = (data, button) => {
  fetch(`/api/songs/delete/${data.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(()=>{
    //delete the btton here
  })
}

const getAllPlaylist = () => {
  fetch(`/api/playlist/get_all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success in getting posts:", data);
    })
    .catch((error) => console.error("Error:", error));
};

// optional helper funtion to clear/ refresh elements when changes are made
const getSongs = (playlist) => { //option one, (replace rendersongtoplaylist functionality)
  const playlistObj = {
    playlist_name: req.body.playlist_name,
  };
  fetch(`/api/playlist/get_one/${playlist.id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    // make sure to serialize the JSON body
    body: JSON.stringify(playlistObj),
  })
    .then((response) => response.json())
    .then((data) => {
      //active_playlist = playlist (if you wnat)
      //add title to playlist
      //element.innerHTML = ''
      //start appending 
      console.log(data);
    });
}