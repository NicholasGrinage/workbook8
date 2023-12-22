//GET ALL
fetch("https://myapi.com/presents");
//OR
fetch("https://myapi.com/presents", { method: "GET" });

//GET ONE
fetch("https://myapi.com/presents/1");


//POST
fetch("https://myapi.com/presents", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

//PUT
fetch("https://myapi.com/presents/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

//DELETE
fetch("https://myapi.com/presents/1", { method: "DELETE" });