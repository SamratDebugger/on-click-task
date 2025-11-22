let button = document.getElementById("button");
let isRed = false;


let sideBar = document.getElementById("sideBar");
let menuBtn = document.getElementById("menuBtn");
let isOpen = false;

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



menuBtn.addEventListener("click", function () {
    if (isOpen) {
        sideBar.style.display = "none";
        isOpen = false;

    }
    else {
        sideBar.style.display = "block";
        isOpen = true;
    }


})