const newsOL = document.getElementById("newsOL")



async function displayArticles() {

    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')

    let ids = await response.json()

    const promises = ids.map(async function(id) {
       let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        return response.json()
    })

    
    Promise.all(promises).then((results) => {
        const articles = results.map(function(article) {
            return `<li>
                    <a href="${article.url}" target="_blank">${article.title}</a>
                    </li><br />`
        })
        newsOL.innerHTML = articles.join("")

    }) 


}

displayArticles()














// getPromises().then(function(results) {
//     console.log(results)
// })

// console.log(getPromises())

// console.log(promises)


// async function displayLinks(id) {

//     let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)

//     let result = await response.json()

//     return newsUL.innerHTML = `<li>${result.title}</li>`

// }


