function validate() {
  alert("asd");
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (fName === "") {
    document.getElementById("fName-help").classList.remove("hidden");
  }

  if (lName === "") {
    document.getElementById("lName-help").classList.remove("hidden");
  }

  if (email === "") {
    document.getElementById("email-help").classList.remove("hidden");
  }

  if (password === "") {
    document.getElementById("password-help").classList.remove("hidden");
  }

  return true;
}

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("asd");
});