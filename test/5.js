fetch("https://api.acme.com/products/101")
  .then((response) => response.json())
  .then((data) => {
      let msgDiv = document.getElementById("msgDiv");
      let msgText =
         data.productName + " $" + data.price.toFixed(2);
      msgDiv.innerHTML = msgText;
   })
;