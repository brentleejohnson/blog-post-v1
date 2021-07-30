fetch("https://tranquil-inlet-75997.herokuapp.com/get-blogs/")
  .then((response) => response.json())
  .then((data) => console.log(data));
