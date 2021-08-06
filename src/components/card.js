import axios from "axios";

const Card = ({ headline, authorPhoto, authorName }) => {
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

  // elements
  const cardDiv = document.createElement("div");
  const headLineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const img = document.createElement("img");
  const authorSpan = document.createElement("span");

  // classes
  cardDiv.classList.add("card");
  headLineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  // text content
  headLineDiv.textContent = `${headline}`;
  authorSpan.textContent = `${authorName}`;

  // attributes
  img.setAttribute("src", `${authorPhoto}`);

  // append
  cardDiv.appendChild(headLineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  imgDiv.appendChild(img);
  authorDiv.appendChild(authorSpan);

  // event listener
  function consoleFunc() {
    console.log(`${headline}`);
  }
  cardDiv.addEventListener("click", consoleFunc);

  return cardDiv;
};

const cardAppender = (selector) => {
  const cardContainer = document.querySelector(".cards-container");
  axios
    .get("http://localhost:5000/api/articles")
    .then((res) => {
      console.log(res.data.articles);

      //Node
      //Jquery
      const articleEObj = Card(res.data.articles.node[0]);
      const articleEObj2 = Card(res.data.articles.node[1]);

      cardContainer.appendChild(articleEObj2);
      cardContainer.appendChild(articleEObj);

      //Jquery
      const articleDObj = Card(res.data.articles.jquery[0]);
      const articleDObj2 = Card(res.data.articles.jquery[1]);
      const articleDObj3 = Card(res.data.articles.jquery[2]);

      cardContainer.appendChild(articleDObj2);
      cardContainer.appendChild(articleDObj3);
      cardContainer.appendChild(articleDObj);

      //Technology
      const articleCObj = Card(res.data.articles.technology[0]);
      const articleCObj2 = Card(res.data.articles.technology[1]);
      const articleCObj3 = Card(res.data.articles.technology[2]);

      cardContainer.appendChild(articleCObj2);
      cardContainer.appendChild(articleCObj3);
      cardContainer.appendChild(articleCObj);
      //Bootstrap
      const articleBObj = Card(res.data.articles.bootstrap[0]);
      const articleBObj2 = Card(res.data.articles.bootstrap[1]);
      const articleBObj3 = Card(res.data.articles.bootstrap[2]);

      cardContainer.appendChild(articleBObj2);
      cardContainer.appendChild(articleBObj3);
      cardContainer.appendChild(articleBObj);
      //Javascript
      const articleObj = Card(res.data.articles.javascript[0]);
      const articleObj2 = Card(res.data.articles.javascript[1]);
      const articleObj3 = Card(res.data.articles.javascript[2]);
      const articleObj4 = Card(res.data.articles.javascript[3]);
      cardContainer.appendChild(articleObj2);
      cardContainer.appendChild(articleObj3);
      cardContainer.appendChild(articleObj4);
      cardContainer.appendChild(articleObj);
    })
    .catch((err) => {
      console.error(err);
    });
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
