// Offer bar
var offerBar = document.querySelector(".offer-bar");
var offerClose = document.getElementById("offer-close");
offerClose.addEventListener("click", function () {
    offerBar.style.display = "none";
})

//Side navbar

var sideNavActi = document.getElementById("side-navbar-activate");
var sideNavBar = document.querySelector(".side-navbar");

sideNavActi.addEventListener("click", function () {
    sideNavBar.style.marginLeft = "0px";
});

var sideNavClose = document.getElementById("side-navbar-close");
sideNavClose.addEventListener("click", function () {
    sideNavBar.style.marginLeft = "-60%";

})

// Slider

const sliderLeft = document.getElementById("slider-left-activate");
const sliderRight = document.getElementById("slider-right-activate");
const sliderImage = document.querySelector(".slider-image-container");
const images = document.querySelectorAll(".slider-image-container img");
const imagesTotal = images.length;
const imageWidth = 100;
let sliderMargin = 0;

//function to update slider position

function sliderUpdatePosition() {
    sliderImage.style.marginLeft = `-${sliderMargin}vw`;
}

//slider left

sliderLeft.addEventListener("click", function () {
    sliderMargin -= imageWidth;

    if (sliderMargin < 0) {
        sliderMargin = (imagesTotal - 1) * imageWidth;
    }
    sliderUpdatePosition();

})

//slider right

sliderRight.addEventListener("click", function () {
    sliderMargin += imageWidth;

    if (sliderMargin >= imageWidth * imagesTotal) {
        sliderMargin = 0;
    }
    sliderUpdatePosition();

});


