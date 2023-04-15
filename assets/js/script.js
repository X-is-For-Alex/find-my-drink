// GLOBAL VARIABLES

var alcoholTypes = ["7-Up","Absolut Citron","Ale","Amaretto","Añejo rum","Angelica root","Apple brandy","Apple cider","Apple juice","Applejack","Apricot brandy","Berries","Bitters","Blackberry brandy","Blended whiskey","Bourbon","Brandy","Cantaloupe","Carbonated water","Champagne","Cherry brandy","Chocolate liqueur","Chocolate syrup","Chocolate","Cider","Cocoa powder","Coffee brandy","Coffee liqueur","Coffee","Cognac","Cranberries","Cranberry juice","Creme de Cacao","Creme de Cassis","Dark rum","demerara Sugar","Dry Vermouth","Dubonnet Rouge","Egg yolk","Egg","Espresso","Everclear","Firewater","Galliano","Gin","Ginger","Grape juice","Grapefruit juice","Grapes","Grenadine","Heavy cream","Irish cream","Irish whiskey","Johnnie Walker","Kahlua","Kiwi","Lager","Lemon juice","Lemon vodka","Lemon","Lemonade","Light rum","Lime juice","Lime","Mango","Midori melon liqueur","Milk","Orange bitters","Orange","Ouzo","Peach nectar","Peach Vodka","Peppermint schnapps","Pineapple juice","Pisco","Port","Red wine","Ricard","Rum","Sambuca","Scotch","Sherry","Sloe gin","Southern Comfort","Spiced rum","Sprite","Strawberries","Strawberry schnapps","Sugar syrup","Sugar","Sweet Vermouth","Tea","Tequila","Tomato juice","Triple sec","Vodka","Water","Watermelon","Whiskey","Yoghurt","Yogurt"];

var drinkNames = ["drink1", "drink2"]


  var cocktailSearch = document.getElementById("cocktailSearch").value
  var typeSelector = document.getElementById("typeSelector")

var alcoholTypes = ["7-Up","Absolut Citron","Ale","Amaretto","Añejo rum","Angelica root","Apple brandy","Apple cider","Apple juice","Applejack","Apricot brandy","Berries","Bitters","Blackberry brandy","Blended whiskey","Bourbon","Brandy","Cantaloupe","Carbonated water","Champagne","Cherry brandy","Chocolate liqueur","Chocolate syrup","Chocolate","Cider","Cocoa powder","Coffee brandy","Coffee liqueur","Coffee","Cognac","Cranberries","Cranberry juice","Creme de Cacao","Creme de Cassis","Dark rum","demerara Sugar","Dry Vermouth","Dubonnet Rouge","Egg yolk","Egg","Espresso","Everclear","Firewater","Galliano","Gin","Ginger","Grape juice","Grapefruit juice","Grapes","Grenadine","Heavy cream","Irish cream","Irish whiskey","Johnnie Walker","Kahlua","Kiwi","Lager","Lemon juice","Lemon vodka","Lemon","Lemonade","Light rum","Lime juice","Lime","Mango","Midori melon liqueur","Milk","Orange bitters","Orange","Ouzo","Peach nectar","Peach Vodka","Peppermint schnapps","Pineapple juice","Pisco","Port","Red wine","Ricard","Rum","Sambuca","Scotch","Sherry","Sloe gin","Southern Comfort","Spiced rum","Sprite","Strawberries","Strawberry schnapps","Sugar syrup","Sugar","Sweet Vermouth","Tea","Tequila","Tomato juice","Triple sec","Vodka","Water","Watermelon","Whiskey","Yoghurt","Yogurt"]
const expandBtn = document.getElementById('expandBtn');
const collapseBtn = document.getElementById('collapseBtn');
const infoDiv = document.getElementById('moreinfobox');

expandBtn.addEventListener('click', () => {
  infoDiv.style.display = 'block';
  expandBtn.style.display = 'none';
  collapseBtn.style.display = 'block';
});

collapseBtn.addEventListener('click', () => {
  infoDiv.style.display = 'none';
  collapseBtn.style.display = 'none';
  expandBtn.style.display = 'block';
});


// code generated by Insomniac app
function getCocktail() {
  const options = {method: 'GET'};

  if (typeSelector == "ingredients") {
    // User is redirected to new HTML page
    location.assign(href = "./index2.html")

    console.log("you should be on the new page! \n You've chosen to search by ingredients!")

    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + cocktailSearch, options)
      .then(response => response.json())
      .then(response => console.log(response))
  }

  else if (typeSelector == "names") {
    // User is redirected to new HTML page
    location.assign(href = "./index2.html")

    console.log("you should be on the new page! \n You've chosen to search by drink names!")

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailSearch, options)
      .then(response => response.json())
      .then(response => console.log(response))
  }
  
  // Code below - for fuzzy match - insipired by: https://stackoverflow.com/questions/7948689/using-js-jquery-to-do-string-search-fuzzy-matching/7948780#7948780//
  var results = $(alcoholTypes)
    .map(function(i,v){ 
        if(v.toLowerCase().indexOf(cocktailSearch.toLowerCase())!=-1){return v} 
    }).get()
  console.log(results)

  buildContainers(results);

  }


function buildContainers (results) {
  for (var i=0; i < results.length; i++) {
    
    let container = document.querySelector(".result")
    let thumbnail = document.createElement("img")
    thumbnail.src = results[i].html_url

    let drinkName = document.createElement("h1")
    let drinkMethod = document.createElement("p")
    let ingredients = document.createElement("ul")

    container.appendChild(thumbnail)
    container.appendChild(drinkName)
    container.appendChild(drinkMethod)
    container.appendChild(ingredients)
  }
};




// auto complete module from jqueryUI
$( function() {
  $( "#cocktailSearch" ).autocomplete({
    source: alcoholTypes
  });
});

document.querySelector("#submit").addEventListener("click", getCocktail)

typeSelector.addEventListener("change", function(event){
  console.log(event.target.value)
  var source = (event.target.value === "names") ? drinkNames : alcoholTypes 
  $( "#cocktailSearch" ).autocomplete({
    source: source
  });

})
