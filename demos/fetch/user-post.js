const user = {
    name: "Lizzo Be Eating",
    username: "thereallizzo",
    email: "lizzo2245@gmail.com",
  };
  
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      console.log(user);
    });