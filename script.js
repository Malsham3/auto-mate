//declare global variables that will be updated and used inside of our functions below
var keyWord;
var vinNumber;
var year;

//Event listener for the first button labeled "AUTO MATE!"
$("#button1").on("click", function (e) {

    // prevent refresh after user click
    e.preventDefault();

    //Get the vin number and year from the user using text fields
    vinNumber = $("#vin-1").val().trim().toUpperCase();
    year = $("#year-1").val().trim();

    // query URL to be used to retrieve data from our first API, NHTSA.
    const statsQueryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vinNumber}?format=json&modelyear=${year}`;

    //API call
    $.ajax({
        method: "GET",
        url: statsQueryURL,
    }).then(function (response) {

        //storing the objects array that contains all of our needed information inside of a local variable "data" / less code. 
        var data = response.Results[0];

        // updating HTML elements to display their assigned data.
        // display vehicle make.
        $("#make-1").text(data.Make);

        //display vehicle model.
        $("#model-1").text(data.Model);

        //display vehicle body style.
        $("#body-1").text(data.BodyClass);

        //display vehicle engine size in Liters.
        $("#engine-1").text(parseFloat((data.DisplacementL)).toFixed(1) + "L");

        //display vehicle engine cylinders number.
        $("#cylinder-1").text(data.EngineCylinders);

        //display vehicle horsepower.
        $("#HP-1").text(parseInt(data.EngineHP));

        //store the vehicle make inside of local variable keyWord to be used inside of the giphy query URL
        keyWord = `${data.Make}`;

        //obtained Access key for the giphy API.
        const apiKey = "OeSI1H44HxzlgDc4LS8882xZuqikWDHL";

        //query url to retrieve data from giphy API, using the keyWord value retrieved from previous API call.
        const imageQueryURL = `https://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=${apiKey}`;

        $.ajax({
            method: "GET",
            url: imageQueryURL,
        }).then(function (picture) {

            //saving the URL of the wanted image inside of carPic
            var carPic = picture.data[0].images.original.url;

            //updating the image HTML element link source to the one obtained from giphy in order to display on the web page. 
            $("#img-1").attr("src", carPic);
        });
    })
});

// following event listener button2 follows the same method and pattern as the one above (button1) and will update information and image for vehicle 2.
$("#button2").on("click", function (e) {
    e.preventDefault();
    vinNumber = $("#vin-2").val().trim().toUpperCase();
    year = $("#year-2").val().trim();
    const statsQueryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vinNumber}?format=json&modelyear=${year}`;
    $.ajax({
        method: "GET",
        url: statsQueryURL,
    }).then(function (response) {

        var data = response.Results[0];
        console.log(response);
        $("#make-2").text(data.Make);
        $("#model-2").text(data.Model);
        $("#body-2").text(data.BodyClass);
        $("#engine-2").text(parseFloat((data.DisplacementL)).toFixed(1) + "L");
        $("#cylinder-2").text(data.EngineCylinders);
        $("#HP-2").text(parseInt(data.EngineHP));
        keyWord = `${data.Make}`;
        const apiKey = "OeSI1H44HxzlgDc4LS8882xZuqikWDHL";
        const imageQueryURL = `https://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=${apiKey}`;
        $.ajax({
            method: "GET",
            url: imageQueryURL,
        }).then(function (picture) {
            console.log(picture);
            var carPic = picture.data[0].images.original.url;
            $("#img-2").attr("src", carPic);
        });
    })
})
