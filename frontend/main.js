let base_Url = "https://intense-temple-67145.herokuapp.com/";

function flaskAPI(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
