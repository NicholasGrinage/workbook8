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

    let cell4 = row.insertCell();
    let button = document.createElement("button");
    button.setAttribute("onclick", "showConfirm(1)");
    button.innerText = "Delete User";
    cell4.appendChild(button);
    let confirm = document.createElement("p");
    confirm.id = "confirm";
    let buttonYes = document.createElement("button");
    buttonYes.innerText = "Yes";
    console.log(user.id);
    buttonYes.setAttribute("onclick", `deleteUser(${user.id})`);
    // alert(user.id)
    buttonYes.onclick = () => {
      // deleteUser(user.id);
    
    };
    let buttonNo = document.createElement("button");
    buttonNo.setAttribute("onclick", "showConfirm(2)");
    buttonNo.innerText = "NO";
    confirm.innerText = `Are you sure?`;
    confirm.style = "display: none";
    confirm.appendChild(buttonYes);
    confirm.appendChild(buttonNo);
    cell4.appendChild(confirm);
  }
}

function showConfirm(display) {
  if (display == 1) {
    document.getElementById("confirm").style.display = "inline";
  } else if (display == 2) {
    document.getElementById("confirm").style.display = "none";
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
