let songInput;
let addToPlaylist;
let removeFromPlaylist;
let songList;
let sendTo;
let playlistGroup;

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
  playlistInput = document.getElementById("playlist-name");
  searchButton = document.getElementById("search-button");
  addToPlaylist = document.getElementById("add-song");
  removeFromPlaylist = document.getElementById("remove-song");
  sendTo = document.querySelector(".to-playlist");
  savePlaylist = document.querySelector(".save-playlist");
  songList = document.querySelectorAll(".list-container .list-group");
  playlistGroup = document.querySelectorAll(".playlist-group");
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

        songList[0].appendChild(songButton);
        songButton.classList.add("btn-primary", "btn");
      });
      // to add all searched songs to the playlist
      const addALL = document.createElement("button");
      addALL.textContent = `Send all to Playlist`;
      addALL.classList.add("btn-primary", "btn");
      sendTo.appendChild(addALL);
    });
});

let playlistArray = [];

sendTo.addEventListener("click", function (e) {
  console.log("I've been hit");

  const toPlaylist = async () => {
    await searchArray.forEach((element) => {
      playlistArray.push(element);
    });
    searchArray = [];
    console.log(playlistArray);
    console.log(searchArray);
  };
  toPlaylist();
  renderPlaylist();
  // need to clean the results section to empty again
  // clears the temp array ready for searching again
});

const renderPlaylist = () => {
  playlistArray.forEach((element) => {
    // to show all song results as button so we can have the user pick  single song to the playlist
    const playlistButton = document.createElement("button");
    playlistButton.append(`Title: ${element.title} Artist: ${element.artist}`);

    playlistGroup[0].appendChild(playlistButton);
    playlistButton.classList.add("btn-primary", "btn");
  });

  const saveBtn = document.createElement("button");
  saveBtn.textContent = `Save Playlist`;
  saveBtn.classList.add("btn-primary", "btn");
  savePlaylist.appendChild(saveBtn);
};

savePlaylist.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("I've been hit");
  createPlaylist();
  getPlaylist();
  saveSong()
});

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
  }).then(() => {
    console.log("playlist created!");
  });
};

const saveSong = () => {
  playlistArray.forEach((element) => {
    console.log(element);
    const currentSong = {
      title: element.title,
      artist: element.artist,
    };

    fetch("api/songs/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      // make sure to serialize the JSON body
      body: JSON.stringify(currentSong),
    }).then(() => {
      console.log("playlist created!");
    });
  });
};

const savedPlaylist = document.querySelector(".saved-playlist");

// const getSongsPlaylist = () => {
//   const playlistObj = {
//     playlist_name: req.body.playlist_name,
//   };
//   fetch("/api/playlist/get_one/:id", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },

//     // make sure to serialize the JSON body
//     body: JSON.stringify(playlistObj),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

const getPlaylist = () => {
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
