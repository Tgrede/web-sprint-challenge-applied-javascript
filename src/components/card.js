import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


  //create elements needed for task
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const byAuthorSpan = document.createElement('span')

  //add classes to the elements
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  //change textContent and src of any elements
  headline.textContent = article.headline
  img.src = article.authorPhoto
  byAuthorSpan.textContent = `By ${article.authorName}`

  //appends the elements where they need to be on the card
  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  author.appendChild(byAuthorSpan)
  imgContainer.appendChild(img)

  //adds the click event listener to print the headline text upon click
  card.addEventListener('click', () => {console.log(headline.textContent)})

  //returns our card
  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('https://lambda-times-api.herokuapp.com/articles') //get data from the server containing our articles
  .then((res) => {

    const articles = res.data.articles 
    const articleList = Object.values(articles)

    
    articleList.forEach((articleArr) => { //loops through articleList and for every array of articles within the articleList...
      articleArr.forEach((article) => { //it loops through every article within the article array
        const newCard = Card(article) //and on that article it creates a card for the article
        document.querySelector(selector).appendChild(newCard) //and finally appends it to the DOM
      })
    })
  })
  .catch((err) => {
    console.log('err: \n \n ', err )
  })
}

export { Card, cardAppender }
