// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
const NodeGeocoder = require("node-geocoder");
const inquirer = require("inquirer");


// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "WJp9APhlFa2lQIqP5Pvoj5RURw4rUzAb"
};

var geocoder = NodeGeocoder(options);

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address
// var address = process.argv.slice(2).join(" ");
inquirer.prompt([

  {
    type: "input",
    message: "Please type your City and State: ",
    name: "city"
  }
]).then(function (location) {

  geocoder.geocode(location.city, function (err, data) {
    if (err) {
      console.log(err);
    }

    console.log(JSON.stringify(data, null, 2));
  });


})


// Then use the Google Geocoder to geocode the address

