// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
const NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
let options = {
  provider: "mapquest",
  apiKey: "WJp9APhlFa2lQIqP5Pvoj5RURw4rUzAb"
};

// Create a geocoder object that can query the mapquest API
let geocoder = NodeGeocoder(options);


// Take in the command line arguments
let userInput = process.argv[2]
console.log(userInput);

// Build your address as an array or string



// Then use the geocoder object to search the address
geocoder.geocode(userInput, function (err, data) {
  if (err) {
    console.log(err);
  }
  // console.log(JSON.stringify(data));
  console.log(data);
})