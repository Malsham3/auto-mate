// First API: NHTSA
// API Key not needed
// database URL: https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/{VIN number}format=json&modelyear={year}
// variables needed : Vin number and year from user.
// format year to be numbers only.
var vinNumber;
var year;

const statsQueryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vinNumber}format=json&modelyear=${year}`


// Second API: Unsplash
// API Key: pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg
// database URL: https://api.unsplash.com/search/photos?page=1&query={KEYWORD}&client_id={API_KEY}
var keyWord;    //get user input val()
var apiKey = "pBuNE2iE6rxSCwu9y9mrpwI0NdVcSm3YwKtL-cpO5eg"

const imageQueryURL = `https://api.unsplash.com/search/photos?page=1&query=${keyWord}&client_id=${apiKey}`