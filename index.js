const button = document.getElementById("button");
let isRed = false;


const sideBar = document.getElementById("sideBar");
const menuBtn = document.getElementById("menuBtn");
let isOpen = false;
const close = document.getElementById("close");

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


    sideBar.style.left = "0";
    isOpen = true;



});
close.addEventListener("click", function () {

    sideBar.style.left = "-100px";
    isOpen = false;


});