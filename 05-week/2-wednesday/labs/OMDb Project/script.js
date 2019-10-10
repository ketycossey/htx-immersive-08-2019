
var xhr = new XMLHttpRequest();
xhr.open("GET", https://www.imdb.com/title/tt0092890/?ref_=fn_al_tt_1);

// Track the state changes of the request.
xhr.onreadystatechange = function() {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText); // 'This is the output.'
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log("Error: " + xhr.status); // An error occurred during the request.
    }
  }
};
xhr.send(null);

// AJAX
$.ajax({
  type: "GET",
  url: "https://www.imdb.com/title/tt0092890/?ref_=fn_al_tt1"
  dataType: "JSON", // data type expected from server
  success: function(response) {
    console.log(response);
    showMovieDetails(response.Title, response.Released);
  },
  error: function(error) {
    console.log("Error: " + error);
  }
});

function showMovieDetails(title, released) {
  var heading = $("<h1/>").text(title);
  $("body").append(heading);
  var released = $("<h2/>").text(released);
  $("body").append(released);





xhr.onreadystatechange = function() {
if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText); // 'This is the output.'
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log("Error: " + xhr.status); // An error occurred during the request.
    }
     $.ajax({
  type: "GET",
  url: "https://www.imdb.com/title/tt0092890/?ref_=fn_al_tt_1",
  dataType: "JSON", // data type expected from server
  success: function(data) {
    console.log(data);
  success: function(response) {
    console.log(response);
    showMovieDetails(response.Title, response.Released);
  }
  error: function(error) {
    console.log("Error: " + error);
  }
});

function showMovieDetails(title, released) {
  var heading = $("<h1/>").text(title);
  $("body").append(heading);
  var released = $("<h2/>").text(released);
  $("body").append(released);
}