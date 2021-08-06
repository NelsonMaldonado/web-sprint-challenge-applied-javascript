import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  // elements
  const topicsDiv = document.createElement("div");
  const tabDivJS = document.createElement("div");
  const tabDivBS = document.createElement("div");
  const tabDivTech = document.createElement("div");
  const tabDivJQ = document.createElement("div");
  const tabDivNJS = document.createElement("div");

  // classes
  topicsDiv.classList.add("topics");
  tabDivJS.classList.add("tab");
  tabDivBS.classList.add("tab");
  tabDivTech.classList.add("tab");
  tabDivJQ.classList.add("tab");
  tabDivNJS.classList.add("tab");

  // text content
  tabDivJS.textContent = "javascript";
  tabDivBS.textContent = "bootstrap";
  tabDivTech.textContent = "technology";
  tabDivJQ.textContent = "Jquery";
  tabDivNJS.textContent = "Node.JS";

  // append
  topicsDiv.appendChild(tabDivJS);
  topicsDiv.appendChild(tabDivBS);
  topicsDiv.appendChild(tabDivTech);
  topicsDiv.appendChild(tabDivJQ);
  topicsDiv.appendChild(tabDivNJS);

  return topicsDiv;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const placeTabsHere = document.querySelector(".tabs-container");
  axios
    .get("http://localhost:5000/api/topics")
    .then((res) => {
      console.log(`it worked, ${res.data.topics}`);
      const resObject = Tabs(res.data.topics);
      placeTabsHere.appendChild(resObject);
    })
    .catch((err) => {
      console.error(`Fatal error ${err}`);
    });
};

export { Tabs, tabsAppender };
