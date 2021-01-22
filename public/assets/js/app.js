const searchTrax = document.getElementById("search-track-btn");
let inputEl = document.getElementById("userInput");

document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.username);
      //foreach item in data.playlists
        // $("#playlists").append(p)<li>data.play</li>
  
      document.userInfo = data;
      console.log(data)
  
    });
    console.info("DOM loaded");
  }

  // UPDATE HERE
  searchTrax.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(``, {
      // something
    }).then((response) => {
      console.log(response);
    });
  });
});

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
});
