// Dependencies
let express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
let PORT = process.env.PORT || 8080;

// Create express app instance.
let app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operator/:operand1/:operand2", function (req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  let operand1 = +req.params.operand1;
  let operand2 = +req.params.operand2;
  let operation = req.params.operator;
  // Initialize the result variable to send later
  let result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      // Add your logic here. Pun intended.
      result = operand1 + operand2;
      break;
    case "subtract":
      // Subtract logic
      result = operand1 - operand2;
      break;
    case "multiply":
      // Multiply
      result = operand1 * operand2;
      break;
    case "divide":
      // Divide
      result = operand1 / operand2;
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
