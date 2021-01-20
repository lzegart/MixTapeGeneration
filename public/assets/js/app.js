const searchTrax = document.getElementById("search-track-btn");
let inputEl = document.getElementById("userInput");

document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
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
