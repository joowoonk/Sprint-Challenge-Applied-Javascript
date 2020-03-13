// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function headerThis() {
    const newHeader = document.createElement("div"),
          newSpan = document.createElement("span"),
          newTitle = document.createElement("h1"),
          lastSpan = document.createElement("span");

    newHeader.classList.add("header");
    newSpan.classList.add("date");
    lastSpan.classList.add("temp");

    newSpan.textContent = "MARCH 13, 2020";
    newTitle.textContent = "Lambda Times";
    lastSpan.textContent = "98°"

    newHeader.append(newSpan, newTitle, lastSpan);

    return newHeader
}

stickHere = document.querySelector(".header-container")

stickHere.append(headerThis())




