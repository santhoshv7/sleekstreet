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

//Selecting search input text and filter check boxes

const filterCheckBoxes = document.querySelectorAll(".filter-checkbox");
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

//Adding event listener for search input

searchInput.addEventListener("keyup", filterProducts);

//Adding event listener for each filter check boxes

filterCheckBoxes.forEach(checkBox => {checkBox.addEventListener('change',filterProducts)});

//filterProducts() definition

function filterProducts(){
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilters = Array.from(filterCheckBoxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value.toLowerCase());

    products.forEach(product => {
        const productName = product.querySelector("h1").textContent.toLowerCase();

        const productTags = product.getAttribute("data-tags").toLowerCase().split(",");

        //Checking if product name matches the search keyword

        const matchesSearch = productName.includes(searchTerm);

        //Checking if any product matches active filter

        const matchesFilter = activeFilters.every(filter => productTags.includes(filter));

        //display condition

        if (matchesSearch && (matchesFilter || activeFilters.length === 0)) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";

        }
    })

    






};