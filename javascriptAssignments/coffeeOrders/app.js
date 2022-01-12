const ordersUL = document.getElementById("ordersUL")

// Adding Orders Variables
let emailAddressTextBox = document.getElementById("emailAddressTextBox")
let drinkTextBox = document.getElementById("drinkTextBox")
let sizeTextBox = document.getElementById("sizeTextBox")
let priceTextBox = document.getElementById("priceTextBox")

const submitOrderBtn = document.getElementById("submitOrderBtn")

// Search Orders Variables
let searchOrderTextBox = document.getElementById("searchOrderTextBox")
const searchEmailBtn = document.getElementById("searchEmailBtn")
const searchOrderContainer = document.getElementById("searchedOrderContainer")

// Search button displays order from email fetched from API
searchEmailBtn.addEventListener("click", function() {
    let searchedEmail = searchOrderTextBox.value
    let request = new XMLHttpRequest()
    request.onload = function() {

        order = JSON.parse(this.responseText)
        searchOrderContainer.innerHTML = ` <li>${order.email}</li>
                                            <p>${order.type}</p>
                                            <p>${order.size}</p>
                                            <p>$${order.price}</p>
                                            <button onclick="deleteOrder()">Delete</button>`
    }
    request.open("GET", `https://troubled-peaceful-hell.glitch.me/orders/${searchedEmail}`)
    request.send()

})

// delete order by email
function deleteOrder() {
    let searchedEmail = searchOrderTextBox.value
    let request = new XMLHttpRequest()
    request.onload= function() {
        getOrders(function(orders) {
            displayOrders(orders)
        })
        searchOrderContainer.innerHTML =`<h2>Order Deleted!</h2>`

    }    

    request.open("DELETE", `https://troubled-peaceful-hell.glitch.me/orders/${searchedEmail}`)
    request.send()
    searchOrderTextBox.value = ""
}


// will submit order and post onto API
submitOrderBtn.addEventListener("click", function() {
    let email = emailAddressTextBox.value
    let drink = drinkTextBox.value
    let size = sizeTextBox.value
    let price = parseFloat(priceTextBox.value)

    let request = new XMLHttpRequest()
    request.onload = function() {
        getOrders(function(orders) {
            displayOrders(orders)
        })
    }
    request.open("POST", "https://troubled-peaceful-hell.glitch.me/orders")
    request.setRequestHeader('Content-Type', 'application/json')

    const body = {
        email : email,
        type : drink,
        size : size,
        price: price
    }
    request.send(JSON.stringify(body))
    emailAddressTextBox.value = ""
    drinkTextBox.value = ""
    sizeTextBox.value = ""
    priceTextBox.value = ""
})





function getOrders(ordersFetched) {

    let request = new XMLHttpRequest()
    request.addEventListener('load', function() {
        let orderParsed = JSON.parse(this.responseText)
        ordersFetched(orderParsed)
    })
    request.open("GET", "https://troubled-peaceful-hell.glitch.me/orders")
    request.send()

}

function displayOrders(orders) {
    let order = orders.map((order) => {
        return `<li>
                <p>${order.email}</p>
                <p>${order.type}</p>
                <p>${order.size}</p>
                <p>$${order.price}</p>
                </li>
        
        `
    })
    ordersUL.innerHTML = order.join("")
    
}

// display orders using callback
getOrders(function(orders) {
    displayOrders(orders)
})


