var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click", 

function(){
    offerBar.style.display="none"
})

var sideNavMenu = document.getElementById("side-navbar-activate")
var sideNavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function(){
    sideNavbar.style.marginLeft="0px"
})

var sideNavMenuu = document.getElementById("side-navbar-close")
var sideNavbarr = document.querySelector(".side-navbar")
sideNavMenuu.addEventListener("click", function(){
    sideNavbarr.style.marginLeft="-60%"
})

var sliderLeft = document.getElementById("slider-left-activate")
var sliderRight = document.getElementById("slider-right-activate")
var container = document.querySelector(".slider-image-container")
var marginLeft = 0

    sliderRight.addEventListener("click", 
    function()
    { if(marginLeft>=200)
        {
            container.style.marginLeft = "-"+marginLeft+"vw"
        }
        else{
            marginLeft = marginLeft+100
            container.style.marginLeft = "-"+marginLeft+"vw"
        }
    })

    sliderLeft.addEventListener("click", 
    function()
    {
        if(marginLeft==0)
        {
            container.style.marginLeft = "-"+marginLeft+"vw"
        }
        else{
            marginLeft = marginLeft-100
            container.style.marginLeft = "-"+marginLeft+"vw"
        }
    })

    var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            e.target.src="Images/BlackHeart.png"
        }
        else{
            e.target.src="Images/RedHeart.png"
        }
    })
})

    // TRANSITION

    window.addEventListener("scroll",function(){
        var elements = this.document.querySelectorAll(".initial-scroll-animate")
        elements.forEach((el)=>{
            windowHeight = window.innerHeight
         var elbound = el.getBoundingClientRect()
       
         if(windowHeight>elbound.top-100){
        el.classList.remove("reveal-scroll-animate")
        }}) 
    })