let favorites = JSON.parse(localStorage.getItem('favoritesDrinks'));
let favIngredients = JSON.parse(localStorage.getItem('favoriteIngredients'))
let favMethod = JSON.parse(localStorage.getItem('favoriteInstructions'))
let favImage = JSON.parse(localStorage.getItem('favoritesThumbnail'))

var showCase = document.querySelector(".favShowcase")
let saveBtn = document.querySelector(".fav")

var faveIndex

let Menu = document.createElement("div")

function makeFaveArray() {
  for (let i = 0; i < favorites.length; i++) {
    let buttonMenu = document.createElement("button");
    buttonMenu.setAttribute("class", "buttons")
    buttonMenu.textContent = favorites[i];
    
    Menu.appendChild(buttonMenu);
    
    buttonMenu.addEventListener("click", function () {
      displayFavorite(i);
    });
  }
}


function displayFavorite(i) {
  showCase.innerHTML = "";
  let favName = document.createElement("h1")

  let favImageDisplay = document.createElement("img")
  favImageDisplay.setAttribute("class", "displayedImage")

  let favIngrDisplay = document.createElement("ul")
  favIngrDisplay.setAttribute("class", "displayedList")
  for (let j = 0; j < favIngredients[i].length; j++) {
    let listItem = document.createElement("li")
    listItem.textContent = favIngredients[i][j]
    favIngrDisplay.appendChild(listItem)
  }  

  let favDescription = document.createElement("p")
  favDescription.setAttribute("class", "itemDescription")

  favName.textContent = favorites[i]

  favImageDisplay.setAttribute("src", favImage[i])

  if (favMethod[i]) {
    favDescription.textContent = favMethod[i]
  }
  
  showCase.appendChild(favName)
  showCase.appendChild(favImageDisplay)
  showCase.appendChild(favIngrDisplay)
  showCase.appendChild(favDescription)
}

makeFaveArray()

Menu.setAttribute("class", "menuDrinks");

let favoritedDrink = document.querySelector(".favoritedDrink");
favoritedDrink.appendChild(Menu)

saveBtn.addEventListener("click", function (event) {
  let clickedElement = event.target;

  // listen for button click
  if (clickedElement.matches(".buttons")) {
    let index = Array.from(clickedElement.parentNode.children).indexOf(clickedElement);
    displayFavorite(index);
  }
})