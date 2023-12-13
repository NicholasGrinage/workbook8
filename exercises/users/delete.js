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
     button.innerText = "Delete User";
     button.setAttribute("onclick", `deleteUser(${user.id})`);
     cell4.appendChild(button);
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
//  saveButton.onclick = addUser;