const newsUL = document.getElementById("newsUL");
const sourceUL = document.getElementById("sourceUL");
const sourceSelect = document.getElementById("sourceSelect");

let articles = news.articles;
let sourcesItems = sources.sources;

const articlesID = articles.map((article) => article.source.id);
const sourcesID = sourcesItems.map((source) => source.id);

console.log(articlesID);
console.log(sourcesID);

const filteredID = sourcesID.filter((id) => articlesID.includes(id));

console.log(filteredID);

displayNews(articles);

function addSourceNameToDropBox(idToDisplay) {
  const idItems = idToDisplay.map(function (sourceID) {
    return `<option>${sourceID.name}</option>`;
  });
  for (index = 0; index < idItems.length; index++) {
    sourceSelect.innerHTML = idItems;
  }
}

addSourceNameToDropBox(sourcesItems);

function displaySources(sourcesToDisplay) {
  const sourceItem = sourcesToDisplay.map(function (source) {
    return `<li>
    <b>${source.name}</b>
    <p>${source.description}</p>
    <a href="${source.url}">${source.url}</a><br />
  </li><br />`;
  });

  sourceUL.innerHTML = sourceItem.join("");
}

function displayNews(newsToDisplay) {
  const newsItem = newsToDisplay.map((article) => {
    return `<li>
      <h2>${article.title}<h2>
      <h3>${article.author}</h3>
      <p>${article.description}<p>
      <a href="${article.url}">${article.url}<a><br />
      <img src="${article.urlToImage}" />
      <p>${article.publishedAt}</p>
      </li>`;
  });

  newsUL.innerHTML = newsItem.join("");
}
