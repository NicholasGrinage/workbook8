async function addUser(user) {
    const response = await fetch("http://localhost:3000/users/14", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const updatedUser = await response.json();
    console.log(updatedUser);
  }
  
  const user = {
    name: "Lizzo T. James",
    username: "thereallizzo",
    email: "lizzo2245@gmail.com",
  };
  
  addUser(user);