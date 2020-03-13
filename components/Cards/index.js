// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardHere(obj){
    const newHeader = document.createElement("div"),
          newHeadline = document.createElement("div"),
          newAuthorLine = document.createElement("div"),
          imgContainerDiv = document.createElement("div"),
          imgTag = document.createElement("img"),
          authorSpan = document.createElement("span");

    newHeader.classList.add("card");
    newHeadline.classList.add("headline");
    newAuthorLine.classList.add("author");
    imgContainerDiv.classList.add("img-container");


    newHeader.textContent = obj.headline;
    imgTag.setAttribute("src",obj.authorPhoto);
    authorSpan.textContent = obj.authorName;

    newHeader.append(newHeadline, newAuthorLine);
    newAuthorLine.append(imgContainerDiv, authorSpan);
    imgContainerDiv.append(imgTag);
    


    return newHeader
}

// console.log(cardHere(js))
parentTagThree = document.querySelector(".cards-container")

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
           let js = response.data.articles.javascript.forEach(each => {
                console.log(each)
                parentTagThree.append(cardHere(each)) 
            }) 
            let bs = response.data.articles.bootstrap.forEach(each => {
                console.log(each)
                parentTagThree.append(cardHere(each)) 
            })
            let tech = response.data.articles.technology.forEach(each => {
                console.log(each)
                parentTagThree.append(cardHere(each)) 
            })
            let jq = response.data.articles.jquery.forEach(each => {
                console.log(each)
                parentTagThree.append(cardHere(each)) 
            })
            let node = response.data.articles.node.forEach(each => {
                console.log(each)
                parentTagThree.append(cardHere(each)) 
            })
            console.log(response);
            // console.log(js)
            
           
        // parentTagThree.append(cardHere(response));
            }
           
        // {response.data.topics.forEach(topicEach =>{
            // console.log(topicEach)
            // parentTagTwo.append(tabsComponent(topicEach))
            // console.log(parentTagTwo)
            // })}
        ).catch(error => {
            console.log("the data was not returned", error);
        })

        