const Header = (title, date, temp) => {
  // elements
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const titleH1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  // classes
  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  // text content
  dateSpan.textContent = `${date}`;
  titleH1.textContent = `${title}`;
  tempSpan.textContent = `${temp}°☼`;

  // append elements
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleH1);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
};
// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).

//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const placeHere = document.querySelector(".header-container");
  placeHere.appendChild(Header("Bay Area Times", "August 6th 2021", "99"));
  return placeHere;
};

export { Header, headerAppender };

/* <div class="header-container">
    <!-- index.js injects the header here -->
  </div> */
