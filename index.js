document.querySelector("button").addEventListener("click", function(event) {
    
    //random numbers generation from 1 to 3
    var randomNumber_one = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    var randomNumber_two = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    var randomNumber_three = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    //raw text for concatenation
    var rawText1 = [
        "Willy the Goblin",
        "Big Daddy",
        "Father Christmas",
    ];
    var rawText2 = [
        "the soup kitchen",
        "Disneyland",
        "the White House"
    ];
    var rawText3 = [
        "spontaneously combusted",
        "melted into a puddle on the sidewalk",
        "turned into a slug and crawled away"
    ];

    //variable declarations
    var defaultName, concatenation, degrees;

    //adding cutom name if user not giving name else will concate th given name
    if (document.querySelector("input").value === "") {
        document.querySelector("input").value = "Bob";
        defaultName = document.querySelector("input").value;
    } else {
        defaultName = document.querySelector("input").value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }

    //checking US radio checked or not
    if (document.querySelectorAll("input#us")[0].checked) {
        degrees = 94;
    } else {
        degrees = 34;
    }
    //Applying class on click of button
    document.querySelector("p").classList.add("story");
    
    //concatenate the whole string with random values everytime
    concatenation = "It was "+degrees+" fahrenheit outside, so " + rawText1[randomNumber_one] +
                    " went for a walk. When they got to " + rawText2[randomNumber_two] +
                    ", they stared in horror for a few moments, then " + rawText3[randomNumber_three] +
                    ". "+defaultName+ " saw the whole thing, but was not surprised — " + rawText1[randomNumber_one] + 
                    " weighs 300 pounds, and it was a hot day.";
    console.log(concatenation);

    //displaying random text in a paragraph
    document.querySelector("p").textContent = concatenation;
});
