
const products = [
    {
        id: 1,
        name: "Floral Summer ",
        src: "Images/Collection1.jpeg",
        desc: "",
        price: 220,
        tags: ["new", "green", "summer"]
    },

    {
        id: 2,
        name: "Winter White",
        src: "Images/Collection12.jpeg",
        desc: "",
        price: 380,
        tags: ["new", "beach", "white"]
    },

    {
        id: 3,
        name: "Party Floral ",
        src: "Images/Collection3.jpeg",
        desc: "",
        price: 450,
        tags: ["trend", "gray", "party"]
    },

    {
        id: 4,
        name: "Winter Jacket",
        src: "Images/Collection4.jpeg",
        desc: "",
        price: 480,
        tags: ["new", "gray", "winter"]
    },
    {
        id: 5,
        name: "Beach Blue",
        src: "Images/Collection13.jpeg",
        desc: "",
        price: 399,
        tags: ["trend", "blue", "beach"]
    }
    ,
    {
        id: 6,
        name: "Party Green",
        src: "Images/Collection7.jpeg",
        desc: "",
        price: 679,
        tags: ["new", "green", "party"]
    },

    {
        id: 7,
        name: "Classic Comfort",
        src: "Images/Collection9.jpeg",
        desc: "",
        price: 580,
        tags: ["new","Black", "fashion"]
    },
    {
        id: 8,
        name: "Urban Threads",
        src: "Images/Collection14.jpeg",
        desc: "",
        price: 999,
        tags: ["trend","red", "party"]
    },
    {
        id: 9,
        name: "Summer Black",
        src: "Images/Collection9.jpeg",
        desc: "",
        price: 340,
        tags: ["old","Black", "summer"]
    },
    {
        id: 10,
        name: "Beach Shirt",
        src: "Images/Collection6.jpeg",
        desc: "",
        price: 399,
        tags: ["new","browm","beach"]
    },
    {
        id: 11,
        name: "Playful Prints",
        src: "Images/Collection11.jpeg",
        desc: "",
        price: 475,
        tags: ["new", "gray", "fashion"]
    },
    {
        id: 12,
        name: "Double Pocket",
        src: "Images/Collection8.jpeg",
        desc: "",
        price: 699,
        tags: ["old", "brown", "fashion"]
    },
    {
        id: 13,
        name: "Classic Trouser",
        src: "Images/Collection2.jpeg",
        desc: "",
        price: 250,
        tags: ["new", "gray", "sports"]
    },
    {
        id: 14,
        name: "Winter Blue",
        src: "Images/Collection10.jpeg",
        desc: "",
        price: 490,
        tags: ["old", "blue", "winter"]
    },
    {
        id: 15,
        name: "Playful Patterns",
        src: "Images/Collection15.jpeg",
        desc: "",
        price: 350,
        tags: ["old", "blue", "beach"]
    },
]

var collectionsOfferBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click", function () {
    collectionsOfferBar.style.display = "none"
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


// PRODUCT


var container = document.querySelector(".products")
products.forEach((product) => {
    console.log("product")
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML = ` <img style="width: 15vw;" src="${product.src}">
    <h1 style="text-align: center; font-size: 1.5vw">${product.name}</h1>
    <p style="text-align: center;">₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.appendChild(createItem)
})

var filterList = []
var tags = document.getElementsByName("tags")
console.log(tags)

tags.forEach((tag) => {
    tag.addEventListener("change", (e) => {

        if (e.target.checked) {
            filterList.push(e.target.value)
            console.log(filterList)
            update()
        }
        else {
            filterList = filterList.filter(item => item !== e.target.value);
            update()
        }
    })
})

function update() {
    var productList = document.querySelectorAll(".product")
    for (var i = 0; i < productList.length; i++) {
        var check = false
        var product = productList[i]
        console.log(product)
        var temp = product.querySelector("tags").innerHTML

        console.log("elemen" + temp)

        const tempFilterArray = temp.split(',');

        console.log("tempfilterarray" + tempFilterArray)
        console.log("filterlist" + filterList)

        filterList.forEach((j) => {
            tempFilterArray.forEach((i) => {
                if (j == i) {
                    check = true
                }
            })
        })

        if (!check && filterList.length > 0) {
            product.style.display = "none"
        }
        else {
            product.style.display = "block"
        }
    };
}