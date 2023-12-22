//get html element
const usersTableBody = document.getElementById("usersTableBody");
let nameFeild = document.querySelector("#nameFeild");
let emailFeild = document.querySelector("#emailFeild");
let userNameFeild = document.querySelector("#userNameFeild");
let inputFeildButton = document.querySelector("#inputFeildButton");
let urlParams = new URLSearchParams(location.search);

//write function
function loadUsersTable(users) {
  for (const user of users) {
    let row = usersTableBody.insertRow();

    let cell1 = row.insertCell();
    cell1.innerText = user.name;

    let cell2 = row.insertCell();
    cell2.innerText = user.email;

    let cell3 = row.insertCell();
    cell3.innerText = user.username;

    let deleteUserButton = buildDeleteUserButton();
    let cell4 = row.insertCell();
    cell4.appendChild(deleteUserButton);

    let confirmParagraph = buildConfirmParagraph(user);

    cell4.appendChild(confirmParagraph);

    deleteUserButton.onclick = () => showConfirm(1, confirmParagraph);
  }
}

function buildDeleteUserButton() {
  let deleteUserButton = document.createElement("button");
  deleteUserButton.innerText = "Delete User";
  return deleteUserButton;
}

function buildConfirmParagraph(user) {
  let confirmParagraph = document.createElement("p");
  confirmParagraph.id = "confirm";
  confirmParagraph.style = "display: none";

  let buttonYes = buildButtonYes(user);

  let buttonNo = buildButtonNo(confirmParagraph);

  confirmParagraph.innerText = `Are you sure?`;

  confirmParagraph.appendChild(buttonYes);
  confirmParagraph.appendChild(buttonNo);
  return confirmParagraph;
}

function buildButtonNo(confirm) {
  let buttonNo = document.createElement("button");
  buttonNo.setAttribute("onclick", "showConfirm(2)");
  buttonNo.innerText = "NO";
  buttonNo.onclick = () => showConfirm(2, confirm);
  return buttonNo;
}

function buildButtonYes(user) {
  let buttonYes = document.createElement("button");
  buttonYes.innerText = "Yes";
  buttonYes.onclick = () => {
    deleteUser(user.id);
  };
  return buttonYes;
}

function showConfirm(display, confirm) {
  if (display == 1) {
    confirm.style.display = "inline";
  } else if (display == 2) {
    confirm.style.display = "none";
  }
}

async function deleteUser(row) {
  await fetch(`http://localhost:3000/users/${row}`, {
    method: "DELETE",
  });
  location.reload();
}

function editUserData() {
  let id = -1;
  if (urlParams.has("id") === true) {
    id = urlParams.get("id");
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        nameFeild.value = user.name;
        emailFeild.value = user.email;
        userNameFeild.value = user.username;
      });
  }
}

function editUser() {
  let newNameFeild2 = nameFeild.value;
  let newEmailFeild2 = emailFeild.value;
  let newUserNameFeild2 = userNameFeild.value;
  let newStreetFeild2 = streetFeild.value;
  let newCityFeild2 = cityFeild.value;

  const editedUser = {
    name: `${newNameFeild2}`,
    email: `${newEmailFeild2}`,
    username: `${newUserNameFeild2}`,
    //had to add new object to get it listed in table
  };
  let id = urlParams.get("id");
  fetch(`http://localhost:3000/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedUser),
  })
    .then((response) => response.json())
    .then((editedUser) => {
      window.location.href = "users.html";
    });
}



function initialize() {
  let users = fetch("http://localhost:3000/users");

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      loadUsersTable(data);
    });
}

window.onload = initialize;
editUserData();
inputFeildButton.onclick = editUser;



//bring in user id data from clicking the edit link


