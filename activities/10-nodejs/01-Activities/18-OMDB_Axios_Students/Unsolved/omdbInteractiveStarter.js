// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...
const axios = require('axios');

// Grab or assemble the movie name and store it in a variable called "movieName"

let movieName = process.argv.slice(2, process.argv.lenght).join("+");
// ...
// for (let i = 2; i < process.argv.length; i++) {
//     movieName += process.argv[i] + '+';
// }

// Then run a request with axios to the OMDB API with the movie specified
let queryUrl = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`;


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request with axios to the queryUrl
// ...
axios.get(queryUrl).then(function (response) {

    // If the request with axios is successful
    // ...
    console.log(response);

    // Then log the Release Year for the movie
    // ...
    console.log(`${movieName} released in - ${response.data.Year}`);
});
