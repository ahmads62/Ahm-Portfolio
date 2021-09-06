<!-- javascript function direct user to the appropiate landing page based on work project grid cell clicked -->

function projectClicked(input) { /* Function receives 1 string argument for conditional check */
    var input = input; /* Assigned in put to a variable for conditional check */
    if (input == "refactor") { /* If else statement to determine url to go */
       /* Javascript window.class to open page */
       window.open("https://ahmads62.github.io/horiseon-code-refactor/Develop/index.html");
    } else if (input == "run-buddy") {
      window.open("https://ahmads62.github.io/run-buddy/");
    }  else {
       return true; /* Return true - No used as of now but semanticly correct */
    }
};