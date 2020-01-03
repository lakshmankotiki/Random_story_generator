document.querySelector("button").addEventListener("click", function(event) {
    // console.log(event);
    var defaultName;
    if (document.querySelector("input").value === "") {
        document.querySelector("input").value = "Bob";
        defaultName = document.querySelector("input").value;
    } else {
        defaultName = document.querySelector("input").value;
    }
    console.log(defaultName);
    randomTextGenerator();
});

function randomTextGenerator() {
    var randomNumber_US = Math.floor((Math.random() * 3) + 1);
    var randomNumber_UK = Math.floor((Math.random() * 3) + 1);
    window.alert(randomNumber_UK + ", " + randomNumber_US);

    var names_US = [
        "Willy the Goblin",
        "Big Daddy",
        "Father Christmas",
    ];
    var names_UK = [
        "the soup kitchen",
        "Disneyland",
        "the White House"
    ];
}