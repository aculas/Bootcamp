// Sets a variable and stores a starting value to keep track of which element to remove 
let currentId = 0;

// Created an empty array for storing values of movies
let moviesList = [];

$(function() {
  // when the delete button is clicked this function removes the closest parent in the top row(tr)

  $("#new-movie-form").on("submit", function(evt) {
    evt.preventDefault();
    let title = $("#title").val();//Uses val to reset values in input boxes to empty string
    let rating = $("#rating").val();

    let movieData = { title, rating, currentId };
    const HTMLtoAppend = createMovieDataHTML(movieData);

    currentId++
    moviesList.push(movieData);

    $("#movie-table-body").append(HTMLtoAppend);
    $("#new-movie-form").trigger("reset");
  });

  // when the delete button is clicked, remove the closest parent tr and remove from the array of movies

  $("tbody").on("click", ".btn.btn-danger", function(evt) {
    // find the index where this movie is
    let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
    
    // remove it from the array of movies
    moviesList.splice(indexToRemoveAt, 1)

    // remove it from the DOM
    $(evt.target)
      .closest("tr")
      .remove();
    
  });

  // when an arrow is clicked on the title or rating for sorting
  $(".fas").on("click", function(evt) {
    
    // Determines the direction to sort and the key to sort by
    let direction = $(evt.target).hasClass("fa-sort-down") ? "down" : "up";
    let keyToSortBy = $(evt.target).attr("id");
    let sortedMovies = sortBy(moviesList, keyToSortBy, direction);
    
    // Empties the table
    $("#movie-table-body").empty();

    // standard for of loop that loops over the object of sorted movies and appends(creates) a new row
    for (let movie of sortedMovies) {
      const HTMLtoAppend = createMovieDataHTML(movie);
      $("#movie-table-body").append(HTMLtoAppend);
    }

    // toggles the arrow up or down
    $(evt.target).toggleClass("fa-sort-down");
    $(evt.target).toggleClass("fa-sort-up");
  });
});

/* accepts an array of objects and a key and sorts by that key */

function sortBy(array, keyToSortBy, direction) {
  return array.sort(function(a, b) {
    // since rating is a number, we have to convert these strings to numbers
    if (keyToSortBy === "rating") {
      a[keyToSortBy] = +a[keyToSortBy];
      b[keyToSortBy] = +b[keyToSortBy];
    }
    if (a[keyToSortBy] > b[keyToSortBy]) {
      return direction === "up" ? 1 : -1;
    } else if (b[keyToSortBy] > a[keyToSortBy]) {
      return direction === "up" ? -1 : 1;
    }
    return 0;
  });
}

/* createMovieDataHTML accepts an object with title and rating keys and returns a string of HTML */

function createMovieDataHTML(data) {
  return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button class="btn btn-danger" data-delete-id=${data.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}
