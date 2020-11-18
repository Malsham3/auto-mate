// First API: NHTSA
// API Key not needed
// database URL: https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/{VIN number}format=json&modelyear={year}
// variables needed : Vin number and year from user.
// format year to be numbers only.
var vinNumber;
var year = $("");

const statsQueryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vinNumber}?format=json&modelyear=${year}`

//AJAX call for car stats from NHTSA
$.ajax({
    method: "GET",
    url: statsQueryURL,
}).then(function (response) {
    var data = response.results
    $("#make-id").text("Make : " + data.Make);
    $("#model-id").text("Model : " +data.Model);
    $("#engine-size").text("Engine size: " + data.DisplacementL + "L");
    $("#engine-cylinders").text("Engine cylinders: " + data.EngineCylinders);
    $("#engine-hp").text("Horsepower: " + data.EngineHP);
})
// Second API: Unsplash
// API Key: pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg
// database URL: https://api.unsplash.com/search/photos?page=1&query={KEYWORD}&client_id={API_KEY}
var keyWord;    //get user input val()
var apiKey = "pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg"

const imageQueryURL = `https://api.unsplash.com/search/photos?page=1&query=${keyWord}&client_id=${apiKey}`

//key features: Make, Model, BodyClass, DisplacementL, EngineCylinders, EngineHP


//ajax call for 