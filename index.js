let button = document.getElementById("button");
isRed = false;

button.addEventListener("click", function () {
    if (isRed) {
        document.body.style.backgroundColor = "white";
        isRed = false;
    }
    else {
        document.body.style.backgroundColor = "red";
        isRed = true;
    }
})