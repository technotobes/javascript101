const newsUL = document.getElementById("newsUL");
const sourceUL = document.getElementById("sourceUL");
const sourceSelect = document.getElementById("sourceSelect");

let articles = news.articles;
let sourcesItems = sources.sources;

const articlesName = articles.map((article) => article.source.name);
const sourcesName = sourcesItems.map((source) => source.name);

// console.log(articlesName);
// console.log(sourcesName);

const filteredNames = sourcesName.filter((name) => articlesName.includes(name));

// console.log(filteredNames);

let fName = "";
for (let i = 0; i < filteredNames.length; i++) {
  fName += `<option>${filteredNames[i]}</option>`;
  sourceSelect.innerHTML = fName;
}

function displayNews(newsToDisplay) {
  const newsItem = newsToDisplay.map((article) => {
    return `<li>
    <img src="${article.urlToImage}" />
      <h2>${article.title}</h2>
      <p>${article.description}<p>
      <h3>By ${article.author} | 
      <a href="${article.url}">Source<a> | ${article.publishedAt}</h3>
      </li><hr />`;
  });

  newsUL.innerHTML = newsItem.join("");
}

displayNews(articles);
