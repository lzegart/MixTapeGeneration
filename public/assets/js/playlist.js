document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  const nameInput = document.getElementById("playlist-name");
  const songList = document.querySelector("");
});


// Create a playlist
const createPlaylist = (playlistData) => {
  fetch ('/api/playlists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playlistData),
  })
    .then(getPlaylists)
    .catch((err) => console.error(err));
};


// Handle when the playliist form is submitted
const handlePlaylistFormSubmit = (e) => {
  e.preventDefault();

  if (!nameInput.value.trim()) {
    alert('Please provide a name for your playlist!');
    return;
  }

  createPlaylist({
    name: nameInput.value.trim(),
  });
};

document
  .getElementById('playlist-form')
  .addEventListener('submit', handlePlaylistFormSubmit);


// Event handler for the delete playlist button
const handleDeleteButton = (e) => {
  const { id } = e.target.parentElement.parentElement;
  fetch(`/api/playlist/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getPlaylists);
};

// Event handler for the rename playlist button
const handleRenameButton = (e) => {
  const { id } = e.target.parentElement.parentElement;
  // fetch(`/api/playlist/${title}`, {    ? do I use title or id or what?
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getPlaylists);
};

// // Create list row for playlists
// const createPlaylistRow = (playlistData) => {
//   const row = document.createElement('row');
//   row.setAttribute('data-playlist', JSON.stringify(playlistData));
// }