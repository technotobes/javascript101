const movieUL = document.getElementById("movieUL");
const movieInfoContainer = document.getElementById("movieInfoContainer");

displayPosterList();

// current task.. click on movie title to display movie poster in movieInfoContainer


function displayPosterList() {
  let request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    let result = JSON.parse(this.responseText);
    let movieItems = result.Search;

    let movies = movieItems.map(function (movie) {
      return `  <a onclick="getMovieIMDBID(${movie.imdbID})">${movie.Title}</a> 
                <img src="${movie.Poster}">

              `;
    });
    movieUL.innerHTML = movies.join("");
  });
  request.open(
    "GET",
    "http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa"
  );
  request.send();
}

function getMovieIMDBID(movieID) {
  let movieInfo = new XMLHttpRequest();
  movieInfo.addEventListener("load", function () {
    let movieInfoParsed = JSON.parse(this.responseText);
    let movieInfoItems = movieInfoParsed.map(function (data) {
      return `<h1>${data.Title}</h1>`;
    });
    movieInfoContainer.innerHTML = movieInfoItems;
  });
  movieInfo.open(
    "GET",
    `https://www.omdbapi.com/?i=${movieID}&apikey=564727fa`
  );
  movieInfo.send();
}
