console.log("Loaded app.js");

// for loops
// functions
// arrays
// event handlers

// when the user types a letter, we'll display
// all the words from a preexisting array that
// start with that letter and they'll be in alphabetical order
var words =
    [
        "Absolutely",
        "adorable",
        "accepted",
        "acclaimed",
        "accomplish",
        "accomplishment",
        "achievement",
        "action",
        "active",
        "admire",
        "adventure",
        "affirm",
        "affirmative",
        "affluent",
        "agree",
        "agreeable",
        "amazing",
        "angelic",
        "appealing",
        "approve",
        "aptitude",
        "attractive",
        "awesome",
        "able",
        "acceptance",
        "accepting",
        "activate",
        "add",
        "addition",
        "advantage",
        "aid",
        "aim",
        "accuracy",
        "beaming",
        "beautiful",
        "believe",
        "beneficial",
        "bliss",
        "bountiful",
        "bounty",
        "brave",
        "bravo",
        "bubbly",
        "blessing",
        "blessed",
        "blissful",
        "bloom",
        "balance ",
        "calm",
        "celebrated",
        "certain",
        "champ",
        "champion",
        "charming",
        "cheery",
        "choice",
        "classic",
        "clean",
        "commend",
        "composed",
        "congratulations",
        "constant",
        "cool",
        "creative",
        "cute",
        "care",
        "caring",
        "create",
        "charm",
        "charming",
        "capable",
        "creativity",
        "celebration",
        "certainty",
        "charity",
        "cuddle",
        "comfort",
        "comfortable",
        "clean",
        "cuddly",
        "cheerful",
        "clarity"];


words.sort();

document.onkeyup = function (event) {
    if (event.key === "a" || event.key === "b" || event.key === "c") {
        // find the appropriate words~
        var selectedWords = [];

        for (var i = 0; i < words.length; i++) {
            if (event.key === words[i].charAt(0).toLowerCase()) {
                selectedWords.push(words[i]);
                // console.log(words[i]);
            }
        }
        for (var j = 0; j < selectedWords.length; j++) {
            selectedWords[j] = selectedWords[j].toLowerCase();
        }

        selectedWords.sort();
        selectedWords.forEach(function (word) {
            console.log(word);
        })
    }
}