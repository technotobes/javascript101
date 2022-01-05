const menuList = document.getElementById("menuList");

let starters = dishes.filter((dish) => dish.course === "Starters");
let entrees = dishes.filter((dish) => dish.course === "Entrees");
let desserts = dishes.filter((dish) => dish.course === "Desserts");

let allBtn = document.getElementById("allBtn")
let starterBtn = document.getElementById("starterBtn")
let entreeBtn = document.getElementById("entreeBtn")
let dessBtn = document.getElementById("dessBtn")

const allItems = dishes.map((dish) => {
    return `<li>
    <h3>${dish.title} - ${dish.price}</h3>
    <p>${dish.description}</p>
    <img src="${dish.imageURL}" />
    </li>`;    
});

menuList.innerHTML = allItems.join(" ")

allBtn.addEventListener("click", () => {
    const allItems = dishes.map((dish) => {
        return `<li>
        <h3>${dish.title} - ${dish.price}</h3>
        <p>${dish.description}</p>
        <img src="${dish.imageURL}" />
        </li>`
    })
    menuList.innerHTML = allItems.join(" ")
})

starterBtn.addEventListener("click", () => {
    const starter = starters.map((dish) => {
        return `<li>
        <h3>${dish.title} - ${dish.price}</h3>
        <p>${dish.description}</p>
        <img src="${dish.imageURL}" />
        </li>`
    })
    menuList.innerHTML = starter.join(" ")
})

entreeBtn.addEventListener("click", () => {
    const entree = entrees.map((dish) => {
        return `<li>
        <h3>${dish.title} - ${dish.price}</h3>
        <p>${dish.description}</p>
        <img src="${dish.imageURL}" />
        </li>`
    })
    menuList.innerHTML = entree.join(" ")
})

dessBtn.addEventListener("click", () => {
    const dessert = desserts.map((dish) => {
        return `<li>
        <h3>${dish.title} - ${dish.price}</h3>
        <p>${dish.description}</p>
        <img src="${dish.imageURL}" />
        </li>`
    })
    menuList.innerHTML = dessert.join(" ")
})



