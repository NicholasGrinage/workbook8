fetch("https://api.nasa.gov/planetary/apod")
  .then((response) => response.json())
  .then((data) => console.log(data));