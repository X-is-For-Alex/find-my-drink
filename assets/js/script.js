// GLOBAL VARIABLES

const alcoholTypes = ["7-Up", "Absolut Citron", "Ale", "Amaretto", "Añejo rum", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Berries", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy", "Chocolate liqueur", "Chocolate syrup", "Chocolate", "Cider", "Cocoa powder", "Coffee brandy", "Coffee liqueur", "Coffee", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg yolk", "Egg", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon juice", "Lemon vodka", "Lemon", "Lemonade", "Light rum", "Lime juice", "Lime", "Mango", "Midori melon liqueur", "Milk", "Orange bitters", "Orange", "Ouzo", "Peach nectar", "Peach Vodka", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar syrup", "Sugar", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt", "Yogurt"];

const drinkNames = ["110 in the shade", "151 Florida Bushwacker", "155 Belmont", "1-900-FUK-MEUP", "24k nightmare", "252", "3 Wise Men", "3-Mile Long Island Iced Tea", "410 Gone", "50\/50", "501 Blue", "57 Chevy with a White License Plate", "69 Special", "747 Drink", "747", "9 1\/2 Weeks", "A Day at the Beach", "A Furlong Too Late", "A Gilligan's Island", "A midsummernight dream", "A Night In Old Mandalay", "A Piece of Ass", "A Splash of Nash", "A True Amaretto Sour", "A. J.", "A.D.M. (After Dinner Mint)", "A1", "Abbey Cocktail", "Abbey Martini", "ABC", "Abilene", "Absinthe #2", "Absolut Evergreen", "Absolut limousine", "Absolut Sex", "Absolut Stress #2", "Absolut Summertime", "Absolutely Cranberry Smash", "Absolutely Fabulous", "Absolutly Screwed Up", "Acapulco", "Ace", "ACID", "Adam & Eve", "Adam Bomb", "Adam Sunrise", "Adam", "Addington", "Addison Special", "Addison", "Adios Amigos Cocktail", "Adonis Cocktail", "Affair", "Affinity", "After Dinner Cocktail", "After Five", "After sex", "After Supper Cocktail", "Afterglow", "Afternoon", "Alabama Slammer", "Alaska Cocktail", "Alexander", "Alfie Cocktail", "Algonquin", "Alice Cocktail", "Alice in Wonderland", "Allegheny", "Allies Cocktail", "Almeria", "Almond Chocolate Coffee", "Almond Joy", "Aloha Fruit punch", "Amaretto And Cream", "Amaretto fizz", "Amaretto Liqueur", "Amaretto Mist", "Amaretto Rose", "Amaretto Shake", "Amaretto Sour", "Amaretto Stinger", "Amaretto Stone Sour Alternative", "Amaretto Stone Sour", "Amaretto Sunrise", "Amaretto Sunset", "Amaretto Sweet & Sour", "Amaretto Tea", "Americano", "Angel Face", "Angelica Liqueur", "Apello", "Aperol Spritz", "Apple Berry Smoothie", "Apple Grande", "Apple Highball", "Apple Karate", "Apple Pie with A Crust", "Apple Slammer", "Applecar", "Applejack", "Apricot Lady", "Apricot punch", "Aquamarine", "Archbishop", "Arctic Fish", "Arctic Mouthwash", "Banana Cantaloupe Smoothie", "Banana Milk Shake", "Banana Strawberry Shake Daiquiri", "Banana Strawberry Shake", "Bora Bora", "Castillian Hot Chocolate", "Chocolate Beverage", "Chocolate Drink", "Coke and Drops", "Cranberry Punch", "Drinking Chocolate", "Egg Cream", "Frappé", "Fruit Cooler", "Fruit Flip-Flop", "Fruit Shake", "Grape lemon pineapple Smoothie", "Holloween Punch", "Hot Chocolate to Die for", "Iced Coffee", "Ipamena", "Just a Moonmint", "Kill the cold Smoothie", "Kiwi Papaya Smoothie", "Lassi - A South Indian Drink", "Lassi - Mango", "Lassi - Sweet", "Lassi Khara", "Lassi Raita", "Lemouroudji", "Limeade", "Mango Orange Smoothie", "Masala Chai", "Melya", "Microwave Hot Cocoa", "Nuked Hot Chocolate", "Orange Scented Hot Chocolate", "Orangeade", "Pineapple Gingerale Smoothie", "Pysch Vitamin Light", "Rail Splitter", "Spanish chocolate", "Spiced Peach Punch", "Spiking coffee", "Strawberry Lemonade", "Strawberry Shivers", "Sweet Bananas", "Thai Coffee", "Thai Iced Coffee", "Thai Iced Tea", "Tomato Tang", "Yoghurt Cooler"];

let ingrSelector = document.getElementById("ingredients")
let cocktailSearch = document.getElementById("cocktailSearch");
let typeSelector = document.getElementById("typeSelector");

let resultsBox = document.querySelector("#accordion");

const collapseBtn = document.getElementById('collapseBtn');
const infoDiv = document.getElementById('moreinfobox');
const options = { method: 'GET' };

const favoriteButton = document.getElementById('favorite-button');
const favoritesKey = 'favoritesDrinks';
let favorites = [];


let resultLimit = 4;






// code generated by Insomniac app
function getCocktail() {
  let searchInput = cocktailSearch.value;
  let typeInput = typeSelector.value;
  const options = { method: 'GET' };

  if (typeInput === "ingredients") {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchInput, options)
      .then(response => response.json())
      .then(function (response) { //want to have an array of names, one for img, one for descr...
        getResults(response)
      })
  }

  else if (typeInput) {

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchInput, options)
      .then(response => response.json())
      .then(response => console.log(response))
  }

  // Code below - for fuzzy match - insipired by: https://stackoverflow.com/questions/7948689/using-js-jquery-to-do-string-search-fuzzy-matching/7948780#7948780//
  var results = $(alcoholTypes)
    .map(function (i, v) {
      if (v.toLowerCase().indexOf(searchInput.toLowerCase()) != -1) { return v }
    }).get()
  console.log(results) //logs alcohol types

}


function getResults(response) {
  let drinkArr = []
  let indexArr = []
  let randoDrink = []
  drinkArr.push(response.drinks)
  console.log(drinkArr)
  for (let i = 0; i < drinkArr[0].length; i++) {
    indexArr.push(Math.floor(Math.random() * drinkArr[0].length))
    randoDrink.push(drinkArr[0][indexArr[i]])
    if (i === resultLimit) {break;}
  }
  console.log(randoDrink) 
  buildContainers(randoDrink)
};

function buildContainers(data) {
  for (i = 0; i < data.length; i++) {
    let drinkId = idFetch(data[i].idDrink)
  }
}

if (localStorage.getItem(favoritesKey)) {
  favorites = JSON.parse(localStorage.getItem(favoritesKey));
}
console.log(favorites)

function aFunction (data) {
  console.log(data)
  let ingredients = []

  if (data.drinks[0].strIngredient !== null) {
    for(let i = 1; i < 15; i++) {
      ingredients.push(data.drinks[0]['strIngredient' + i])
      console.log(ingredients)
  }}
  
  let filtered = ingredients.filter(ingredient => ingredient !== null)
  console.log(filtered) //working!! this gives an array of strictly ingredients for each beverage, without the "nulls"//
  
  let card = document.createElement("div")
  card.setAttribute("class", "resultHeader")

  let title = document.createElement("h3")
  title.textContent = data.drinks[0].strDrink

  let ulEl = document.createElement("ul")
  ulEl.setAttribute("class", "drinkIngredients")

    let favoriteButton = document.createElement("button");
    favoriteButton.setAttribute("id", "favorite-button");
    favoriteButton.innerHTML = '<i class="fa fa-star"></i> Add to Favorites';
    favoriteButton.addEventListener("click", function () {
      if (favoriteButton.classList.contains("active")) {
        favoriteButton.classList.remove("active");
        favorites = favorites.filter((drink) => drink !== title.textContent);
        localStorage.setItem(favoritesKey, JSON.stringify(favorites));
      } else {
        favoriteButton.classList.add("active");
        favorites.push(title.textContent);
        localStorage.setItem(favoritesKey, JSON.stringify(favorites));
      }
      console.log(favorites);
    });
 

 
  //for loop

  let imgEl = document.createElement("img")
  imgEl.setAttribute("class", "thumbnail")
  imgEl.setAttribute("src", data.drinks[0].strDrinkThumb)

  card.appendChild(title)
  card.appendChild(ulEl)
  card.appendChild(imgEl)
  resultsBox.appendChild(card)
  card.appendChild(favoriteButton)
}



function idFetch (id) {
  console.log(id)
  const options = { method: 'GET' };
  return fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id, options)
      .then(response => response.json())
      .then(function (response) {
        aFunction(response)
      })     
};

// auto complete module from jqueryUI
$(function () {
  $("#cocktailSearch").autocomplete({
    source: alcoholTypes
  });
});

typeSelector.addEventListener("change", function (event) {
  console.log(`typeSelector: ${event.target.value}`)
  test = event.target.value;
  var source = (event.target.value === "names") ? drinkNames : alcoholTypes
  $("#cocktailSearch").autocomplete({
    source: source
  });
})

$("#accordion").accordion({
  collapsible: true
});

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    active: false,
    header: "span"
  });
});

// $("#favorites").click(function(){
//   $("main").toggle("drop", "slow");
//   $("#test").toggle("drop", "slow");
// });

document.querySelector("#submit").addEventListener("click", getCocktail)
