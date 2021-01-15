import axios from "axios";

const Tabs = (topics) => { //Function takes an array of topics
  const topicsTab = document.createElement('div') //Creates a new topics tab element
  topicsTab.classList.add('topics') //Adds class to topics tab
  topics.forEach((topic) => { //For every topic in our topics array...
   const newTab = document.createElement('div') //create a new topic element
   newTab.classList.add('tab') //then add a tab class to our topic element
   newTab.textContent = topic //then add text content to our new
   topicsTab.appendChild(newTab)
 });
 return topicsTab
}
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
  //

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then((res) => {
    const newTabs = Tabs(res.data.topics)
    document.querySelector(selector).appendChild(newTabs)
  })
  .catch((err) => {
    console.log('err: \n \n ', err )
  })
}

export { Tabs, tabsAppender }
