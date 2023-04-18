
let favorites = JSON.parse(localStorage.getItem('favoritesDrinks'));
console.log(favorites);

let ulEl = document.createElement("ul")
for (let i = 0; i < favorites.length; i++) {
  let liEl = document.createElement("li");
  liEl.textContent = favorites[i];
  liEl.textContent = favorites[i];
  liEl.style.borderBottom = "1px solid black";
  liEl.style.position = "relative";
  liEl.style.top = "-7rem";
  liEl.style.left = "-15em";
  liEl.style.margin = "0";
  liEl.style.color = "#B6CBDD";
  liEl.style.fontSize = "16px";
  liEl.style.display = "flex";
  liEl.style.justifyContent = "center" 
  
  ulEl.appendChild(liEl);
}
ulEl.setAttribute("class", "favoritedDrinks");

let favoritedDrink = document.getElementById("favoritedDrink");
favoritedDrink.appendChild(ulEl)