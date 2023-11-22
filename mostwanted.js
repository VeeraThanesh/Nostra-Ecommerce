var likebuttons = document.querySelectorAll(".like-button")

likebuttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {

        if (e.target.src.indexOf("blackheart") > 0) {
            console.log("Heart");
            e.target.src = "Images/BlackHeart.png"
        }
        else {
            e.target.src = "Images/RedHeart.png"
        }
    })
})

var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

    function () {
        offerBar.style.display = "none"
    })

var sideNavMenu = document.getElementById("side-navbar-activate")
var sideNavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {

    sideNavbar.style.marginLeft = "0px"
})

var sideNavMenuu = document.getElementById("side-navbar-close")
var sideNavbarr = document.querySelector(".side-navbar")
sideNavMenuu.addEventListener("click", function () {

    sideNavbarr.style.marginLeft = "-60%"
})