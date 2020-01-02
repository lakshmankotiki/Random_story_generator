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
});

function randomTextGenerator() {
    var text = [

    ]
}