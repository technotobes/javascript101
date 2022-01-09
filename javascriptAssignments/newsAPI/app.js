const newsUL = document.getElementById("newsUL");
const sourceSelect = document.getElementById("sourceSelect");
const viewAllBtn = document.getElementById("viewAllBtn");

let articles = news.articles;
let sourcesItems = sources.sources;

const articlesName = articles.map((article) => article.source.name);
const sourcesName = sourcesItems.map((source) => source.name);

// console.log(articlesName);
// console.log(sourcesName);

const filteredNames = sourcesName.filter((name) => articlesName.includes(name));

// console.log(filteredNames);

// adding name to drop down list
let fName = "";
for (let i = 0; i < filteredNames.length; i++) {
  fName += `<option>${filteredNames[i]}</option>`;
  sourceSelect.innerHTML = fName;
}
// view all sources button
viewAllBtn.addEventListener("click", function () {
  displaySources(sourcesItems);
});

// drop down list
sourceSelect.addEventListener("change", function () {
  const selectedSource = this.value;

  const filteredArticles = articles.filter(
    (article) => article.source.name == selectedSource
  );

  displayNews(filteredArticles);
});

// display all sources function
function displaySources(sourceToDisplay) {
  const sourceItem = sourceToDisplay.map((source) => {
    return `<li>
      <h2>${source.name}</h2>
      <p>${source.description}<p>
      <a href="${source.url}">${source.url}<a>
      </li><hr />`;
  });
  newsUL.innerHTML = sourceItem.join("");
}

// display all News function
function displayNews(newsToDisplay) {
  const newsItem = newsToDisplay.map((article) => {
    return `<li>
      <h2>${article.title}</h2>
      <p>${article.description}<p>
      <h3>By ${article.author} | 
      <a href="${article.url}">Source<a> | ${article.publishedAt}</h3>
      </li><hr />`;
  });

  newsUL.innerHTML = newsItem.join("");
}

displayNews(articles);
