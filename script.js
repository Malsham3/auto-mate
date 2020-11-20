// First API: NHTSA
// API Key not needed
// database URL: https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/{VIN number}format=json&modelyear={year}
// variables needed : Vin number and year from user.
// format year to be numbers only.
var vinNumber;
var year = $("");

const statsQueryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vinNumber}?format=json&modelyear=${year}`;

// Second API: Unsplash
// API Key: pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg
// database URL: https://api.unsplash.com/search/photos?page=1&query={KEYWORD}&client_id=pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg
var keyWord; //get user input val()
var apiKey = "pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg";

const imageQueryURL = `https://api.unsplash.com/search/photos?page=1&query=${keyWord}%20logo&client_id=${apiKey}`;

//First,
//AJAX call for car stats from NHTSA

//Then, AJAX call for images from unsplash.

//Bradley:
//Create an event listener for button1 and button2 and include the AJAX calls above in each one. make sure you change the query selectors to the actual id names inside of our HTML.


$("#button1").on("click", function (e) {
  e.preventDefault();
  vinNumber = $("#vin-1").val();
  year = $("#year-1").val();
  $.ajax({
    method: "GET",
    url: statsQueryURL,
  }).then(function (response) {
    //key features: Make, Model, BodyClass, DisplacementL, EngineCylinders, EngineHP
    var data = response.Results[0];
    console.log(response);
    $("#make-1").text(data.Make);
    $("#model-1").text(data.Model);
    $("#engine-1").text(data.DisplacementL + "L");
    $("#cylinder-1").text(data.EngineCylinders);
    $("#HP-1").text(data.EngineHP);
  });
  $.ajax({
    method: "GET",
    url: imageQueryURL,
  }).then(function (response) {
    keyWord = `${data.Make} Logo`;
    var data = response.results[0].urls.thumb;
    $("#img-1").attr("src", data);
  });
});

$("#button2").on("click", function (e) {
    e.preventDefault();
    vinNumber = $("#vin-2").val();
    year = $("#year-2").val();
    $.ajax({
      method: "GET",
      url: statsQueryURL,
    }).then(function (response) {
      //key features: Make, Model, BodyClass, DisplacementL, EngineCylinders, EngineHP
      var data = response.Results[0];
      console.log(response);
      $("#make-2").text(data.Make);
      $("#model-2").text(data.Model);
      $("#engine-2").text(data.DisplacementL + "L");
      $("#cylinder-2").text(data.EngineCylinders);
      $("#HP-2").text(data.EngineHP);
    });
    $.ajax({
      method: "GET",
      url: imageQueryURL,
    }).then(function (response) {
      keyWord = `${data.Make} Logo`;
      var data = response.results[0].urls.thumb;
      $("#img-2").attr("src", data);
    });
  });
  