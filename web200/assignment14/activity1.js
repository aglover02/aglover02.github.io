"use strict";

(function() {
  const API = "https://jsonplaceholder.typicode.com/users";

  window.addEventListener("load", init);

  function init() {
    document.getElementById("addUser")
            .addEventListener("click", addUser);
    document.getElementById("getUser")
            .addEventListener("click", getUser);
  }

  //grab all form inputs and return a plain object
  function collectFormData() {
    return {
      firstName:  document.getElementById("firstName").value,
      lastName:   document.getElementById("lastName").value,
      address:    document.getElementById("address").value,
      city:       document.getElementById("city").value,
      region:     document.getElementById("region").value,
      postalCode: document.getElementById("postalCode").value,
      email:      document.getElementById("email").value,
      phone:      document.getElementById("phone").value,
      dob:        document.getElementById("dob").value
    };
  }

  //POST the form data as JSON
  function addUser() {
    const data = collectFormData();
    const req = new XMLHttpRequest();
    req.open("POST", API, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.onload = () => displayResponse(req);
    req.send(JSON.stringify(data));
  }

  //GET user 1 and display
  function getUser() {
    const req = new XMLHttpRequest();
    req.open("GET", API + "/1");
    req.onload = () => displayResponse(req);
    req.send();
  }

  //common display logic
  function displayResponse(req) {
    const out = document.getElementById("response");
    out.textContent = `Status: ${req.status}\n${req.responseText}`;
  }
})();
