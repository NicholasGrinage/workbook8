//get html element
const usersTableBody = document.getElementById("usersTableBody");

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

function initialize() {
  let users = fetch("http://localhost:3000/users");

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      loadUsersTable(data);
    });
}

window.onload = initialize;