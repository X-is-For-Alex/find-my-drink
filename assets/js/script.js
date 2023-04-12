var myAPI = "DPLxb6QHJSPxaVidvpNgMA==wiWXoe45phhWSAGg";

function search() {
  var searchInput = document.getElementById("cocktailSearch").value;
  var searchType = document.getElementById("typeSelector").value;
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/cocktail?' + searchType + '=' + searchInput,
      headers: { 'X-Api-Key': myAPI},
      contentType: 'application/json',
      success: function(result) {
          console.log(result);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
}

document.querySelector("#submit").addEventListener("click", search)