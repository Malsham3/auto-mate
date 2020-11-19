// First API: NHTSA
// API Key not needed
// database URL: https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/{VIN number}format=json&modelyear={year}
// variables needed : Vin number and year from user.
// format year to be numbers only.
var vinNumber1;
var vinNumber2;
var year1;
var year2;


//AJAX call for car stats from NHTSA
function decode(vinNumber, year) {
    const statsQueryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vinNumber}?format=json&modelyear=${year}`
    $.ajax({
        method: "GET",
        url: statsQueryURL,
    }).then(function (response) {
        //key features: Make, Model, BodyClass, DisplacementL, EngineCylinders, EngineHP
        var data = response.results
        // $("#make-id").text("Make : " + data.Make);
        // $("#model-id").text("Model : " + data.Model);
        // $("#engine-size").text("Engine size: " + data.DisplacementL + "L");
        // $("#engine-cylinders").text("Engine cylinders: " + data.EngineCylinders);
        // $("#engine-hp").text("Horsepower: " + data.EngineHP);
    })
    return data;
}

// Second API: Unsplash
// API Key: pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg
// database URL: https://api.unsplash.com/search/photos?page=1&query={KEYWORD}&client_id=pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg
var keyWord;    //get user input val()
var apiKey = "pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg"

const imageQueryURL = `https://api.unsplash.com/search/photos?page=1&query=${data.Make}%20logo&client_id=${apiKey}`


//ajax call for images from unsplash
$.ajax({
    method: "GET",
    url: imageQueryURL,
}).then(function (response) {
    var data = response.results[0].urls.thumb
    $("#car-picture").attr("src", data);
})

$("#button1").on("click", function(e) {
    e.preventDefault();

    console.log("Button 1")

    vinNumber1 = $("#vin-1").val();
    // year1 = $("#year-1").val();
    console.log(vinNumber1);
    
    decode(vinNumber1, 2019)

    $("#make-1").text("Make : " + data.Make);
    $("#model-1").text("Model : " + data.Model);
    $("#engine-1").text("Engine size: " + data.DisplacementL + "L");
    $("#cylinder-1").text("Engine cylinders: " + data.EngineCylinders);
    $("#HP-1").text("Horsepower: " + data.EngineHP);

})