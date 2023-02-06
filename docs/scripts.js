function validate() {
  let fName = document.getElementById("fName");
  let lName = document.getElementById("lName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const fNameHelp = document.getElementById("fName-help");
  const lNameHelp = document.getElementById("lName-help");
  const emailHelp = document.getElementById("email-help");
  const passwordHelp = document.getElementById("password-help");
  const fNameblock = document.getElementById("fName-block");
  const lNameblock = document.getElementById("lName-block");
  const emailblock = document.getElementById("email-block");
  const passwordblock = document.getElementById("password-block");

  if (fName.value === "") {
    fNameHelp.classList.remove("hidden");
    fName.classList.add("!border-red-400");
  }
  else{
    fNameHelp.classList.add("hidden");
    fName.classList.remove("!border-red-400");
  }

  if (lName.value === "") {
    lNameHelp.classList.remove("hidden");
    lName.classList.add("!border-red-400");
  }
  else{
    lNameHelp.classList.add("hidden");
    lName.classList.remove("!border-red-400");
  }

  if (!emailRegex.test(email.value)) {
    emailHelp.classList.remove("hidden");
    email.classList.add("!border-red-400");
  }
  else{
    emailHelp.classList.add("hidden");
    email.classList.remove("!border-red-400");
  }

  if (password.value === "") {
    passwordHelp.classList.remove("hidden");
    password.classList.add("!border-red-400");
  }
  else{
    passwordHelp.classList.add("hidden");
    password.classList.remove("!border-red-400");
  }

  return true;
}
