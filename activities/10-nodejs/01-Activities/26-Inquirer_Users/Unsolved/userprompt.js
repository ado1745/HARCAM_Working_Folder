// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

const inquirer = require("inquirer");
// console.log(inquirer);

let Userpassword = "Test"
inquirer.prompt([
    {
        type: "input",
        message: "Hey what's up how is your day?",
        name: "input"
    },

    {
        type: "password",
        message: "Please set your password",
        name: "password",
        validate: function passValidite(name) {
            if (name === Userpassword) {
                console.log(name);
            };
        }
    },

    {
        type: "list",
        message: "How is your favorite Super Hero",
        choices: ["Super Man", "Iron Man", "Batman", "Hulk"],
        name: "superHero"
    },

    {
        message: "Select your sex",
        type: "checkbox",
        name: "sex",
        choices: ["Male", "Female", "Prefer not to disclose"]

    }

]).then(function (answers) {
    console.log(answers)
});