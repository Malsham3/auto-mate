// First API: NHTSA
// API Key not needed
// database URL: https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/{VIN number}format=json&modelyear={year}
// variables needed : Vin number and year from user.
// format year to be numbers only.
// var vinNumber;
// var year;

// const statsQueryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vinNumber}?format=json&modelyear=${year}`

// Second API: Unsplash
// API Key: pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg
// database URL: https://api.unsplash.com/search/photos?page=1&query={KEYWORD}&client_id=pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg
var keyWord; //get user input val()
var apiKey = "pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg";


//First,
//AJAX call for car stats from NHTSA

//Then, AJAX call for images from unsplash.



$("#button1").on("click", function (e) {
    e.preventDefault();
    var vinNumber = $("#vin-1").val().trim().toUpperCase();
    var year = $("#year-1").val().trim();
    const statsQueryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vinNumber}?format=json&modelyear=${year}`;
    $.ajax({
        method: "GET",
        url: statsQueryURL,
    }).then(function (response) {
        //key features: Make, Model, BodyClass, DisplacementL, EngineCylinders, EngineHP
        var data = response.Results[0];
        console.log(response);
        $("#make-1").text(data.Make);
        $("#model-1").text(data.Model);
        $("#body-1").text(data.BodyClass);
        $("#engine-1").text(data.DisplacementL + "L");
        $("#cylinder-1").text(data.EngineCylinders);
        $("#HP-1").text(data.EngineHP);

        keyWord = `${data.Make}-logo`;

        const imageQueryURL = `https://api.unsplash.com/search/photos?page=1&query=${keyWord}%20logo&client_id=${apiKey}`;
        console.log(keyWord)
        $.ajax({
            method: "GET",
            url: imageQueryURL,
        }).then(function (picture) {
            var data2 = picture.results[1].urls.thumb;
            $("#img-1").attr("src", data2);
        });
    });
});

$("#button2").on("click", function (e) {
    e.preventDefault();
    vinNumber = $("#vin-2").val().trim().toUpperCase();
    year = $("#year-2").val().trim();
    const statsQueryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vinNumber}?format=json&modelyear=${year}`;
    $.ajax({
        method: "GET",
        url: statsQueryURL,
    }).then(function (response) {
        //key features: Make, Model, BodyClass, DisplacementL, EngineCylinders, EngineHP
        var data = response.Results[0];
        console.log(response);
        $("#make-2").text(data.Make);
        $("#model-2").text(data.Model);
        $("#body-2").text(data.BodyClass);
        $("#engine-2").text(data.DisplacementL + "L");
        $("#cylinder-2").text(data.EngineCylinders);
        $("#HP-2").text(data.EngineHP);
        keyWord = `${data.Make}-logo`;
        
        const imageQueryURL = `https://api.unsplash.com/search/photos?page=1&query=${keyWord}%20logo&client_id=${apiKey}`;

        console.log(keyWord)
        $.ajax({
            method: "GET",
            url: imageQueryURL,
        }).then(function (picture) {
            var data2 = picture.results[1].urls.thumb;
            $("#img-2").attr("src", data2);
        });
})
})


    // `https://api.unsplash.com/search/photos?page=1&query=porsche logo&client_id=pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg


    //WP0AC2A9XFS183263  2015
    //WUAEAAFXXH7901685 2017