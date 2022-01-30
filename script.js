let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  function updatedSiteTitle() {
    document.getElementById("main-title").innerText = "DOM's Homepage";
  }
  updatedSiteTitle();


  // Part 2
  function updateBackgroundColor() {
    document.body.style.backgroundColor = "floralwhite";
  }
  updateBackgroundColor();


  // Part 3
  function removeLastItem() {
    document.querySelector("li:last-child").remove("li:last-child");
  }
  removeLastItem();


  // Part 4
  function updateFontSize() {
    let items = document.getElementsByClassName("special-title");
    for (let i = 0; i < items.length; i++) {
      items[i].style.fontSize = "2rem";
    }
  }
  updateFontSize();


  // Part 5
  function removePastRacingItem() {
    let pastRaces = document.getElementById("past-races");
    pastRaces.removeChild(pastRaces.children[3]);
  }
  removePastRacingItem();


  // Part 6
  function addNewCity() {
    let listItem = document.createElement("li");
    let text = document.createTextNode("Miami");
    listItem.appendChild(text);
    document.getElementById("past-races").appendChild(listItem);
  }
  addNewCity();


  // Part 7
  function blogPost() {
    let blogPostDiv = document.createElement("div");
    let h1Element = document.createElement("h1");
    let pElement = document.createElement("p");


    blogPostDiv.className = "blog-post purple";
    h1Element.innerHTML = "Miami";
    pElement.innerHTML = "I had drag race down South Beach!";
    blogPostDiv.appendChild(h1Element);
    blogPostDiv.appendChild(pElement);


    let main = document.getElementsByClassName("main")[0]; //[0] = end of list
    main.appendChild(blogPostDiv);
  }


  blogPost();
}
