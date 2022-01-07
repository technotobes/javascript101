let symbolBox = document.getElementById("symbolBox");
let btnEnter = document.getElementById("btnEnter");
let stockQuoteContainer = document.getElementById("stockQuoteContainer");
const stockQuoteForm = document.getElementById("stockQuoteForm")

let intervalID = 0;

btnEnter.addEventListener("click", function (event) {

  let isFormValid = stockQuoteForm.checkValidity()
  if(!isFormValid) {
    return
  }

  window.clearInterval(intervalID);

  const symbol = symbolBox.value;

  fetchStockQuote(symbol, function (quote) {
    displayStockQuote(quote);
  });

  const quote = getStockQuote(symbol);
  displayStockQuote(quote);

  event.preventDefault()
});

function fetchStockQuote(symbol, stockQuoteFetched) {
  intervalID = window.setInterval(function () {
    const quote = getStockQuote(symbol);
    stockQuoteFetched(quote);
  }, 2000);
}

function displayStockQuote(quote) {
  stockQuoteContainer.innerHTML = `
  <h1>${quote.name}</h1>
  <p class= ${quote.price < 300 ? "low-price" : "high-price"}>$${
    quote.price
  }</p>
  `;
}
