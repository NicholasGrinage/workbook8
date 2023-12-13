//GET ALL
fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
  });

//GET ALL AWAIT
async function getUsers() {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();
  return users;
}

async function initialize() {
  const users = await getUsers();
  console.log(users);
}

initialize();

const newUser = {
  name: "Rodney Dangerfield",
  username: "rdangerfield",
  email: "rdanger.info",
};

//POST
fetch("http://localhost:3000/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newUser),
})
  .then((response) => response.json())
  .then((user) => {
    console.log(user);
  });